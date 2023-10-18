import { Injectable } from '@angular/core';
import { PostsService } from '../services/posts.service';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class allPost implements Resolve<object> {

  constructor(private allServerService: PostsService) {}
  
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<object> 
  {
    console.log('Resolve');
    return this.allServerService.getAllPost();
  };
}