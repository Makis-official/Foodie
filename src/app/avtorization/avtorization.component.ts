import { Component } from '@angular/core';
import { UsersService } from '../services/users.service';
import { Store } from '@ngxs/store';
import { jwtState } from '../store/user.state';
import { getJwt } from '.././store/model/authUser.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-avtorization',
  templateUrl: './avtorization.component.html',
  styleUrls: ['./avtorization.component.css']
})

export class AvtorizationComponent {

  constructor(public users: UsersService, private store: Store) {}

  currentAuth = this.store.selectSnapshot(jwtState.getAuthObject);
  isInputValid: boolean = false;

  checkInputValid(){
    this.isInputValid = true;
  };

  getUsers() {
    this.users.userPost().subscribe({
      next: (value) => {

        this.users.userPost().subscribe({
          next: (value) => {
            this.users.token = value.access_token;
            this.users.role = value.role;

            this.store.dispatch(
            new getJwt({
              access_token: value.access_token,
              fullname: value.fullname,
              id: value.id,
              role: value.role,
              image: value.image,
              username: value.username,     
            }));

            Notify.success('Вы успешно авторизированы!');
          }
        })
      },
      error: (err: HttpErrorResponse) => {
        if(err.status === 404 || err.status === 401 || err.status === 502)
        {
          Notify.failure('Логин или пароль не найдены в базе');
        }
      }
    });
  };


}
