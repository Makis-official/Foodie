import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{

  constructor(private serve: UsersService) {}
  allUser: User[] = [];

  ngOnInit(): void {

    this.serve.getAllUser().subscribe({
      next: (value) => {
        this.allUser = value;
      }
    });
  }

}
