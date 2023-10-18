import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Notify } from 'notiflix';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})


export class RegistrationComponent implements OnInit {

  constructor(public usServ: UsersService) {}

  newUser() {
    this.usServ.regUser().subscribe({
      next: (value) => {
        Notify.success('Вы успешно зарегестрированы!');
      },
      error: (err: HttpErrorResponse) => {
        if(err.status === 404 || err.status === 401 || err.status === 502)
        {
          Notify.failure('Ошибка сервера! Попробуйте снова');
        }
      }
    });
  };

  ngOnInit(): void {
  }

}
