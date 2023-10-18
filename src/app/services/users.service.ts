import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auntification } from '../interfaces/auntification';
import { Registration } from '../interfaces/registration';
import { User } from '../interfaces/user';
import { jwt } from '../store/model/authUser.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  role: string | undefined;
  userOne = <Auntification>{};
  registrUser = <Registration>{};
  token: string | undefined;

  regUser() {
    return this.http.post<Registration>('https://ea-backend.wckz.space/users/register', {'email': this.registrUser.email, 'password': this.registrUser.password});
  };

  userPost() {
    return this.http.post<jwt>('https://ea-backend.wckz.space/users/login', {'username': this.userOne.username, 'password': this.userOne.password});
  };

  getAllUser() {
    return this.http.get<User[]>('https://ea-backend.wckz.space/users', {'headers': {"Authorization": [`Bearer ${this.token}`]}});
  };
}
