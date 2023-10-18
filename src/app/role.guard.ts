import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivate,
  Router,
} from '@angular/router';
import { Observable } from "rxjs";
import { UsersService } from './services/users.service';
import { Store } from '@ngxs/store';


@Injectable()
export class roleGuard implements CanActivate {

  constructor(private store: Store, private router:Router, private serv: UsersService ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean> | Promise<boolean> | boolean {

    
    if (this.serv.role === 'admin')  {
      return true;
    } else {
      return this.router.navigateByUrl('error');
    }
  };

}