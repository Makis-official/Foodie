import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Store } from '@ngxs/store';
import { jwtState } from '../../store/user.state';
import { getJwt } from '../.././store/model/authUser.model';
import { PostInState } from 'src/app/store/model/allAdminPost.model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit, OnDestroy {

  constructor(private users: UsersService, public postServ: PostsService, private store: Store) {}

  allPost: PostInState[] = [];
  allPostServ: PostInState[] = [];
  colorActive: boolean | undefined;
  colorActiveTwo: boolean | undefined;
  currentAuth = this.store.selectSnapshot(jwtState.getAuthObject);  

  ngOnInit(): void {
      this.colorActive = true;
      this.colorActiveTwo = false;
  };

  ngOnDestroy(): void {
      this.colorActive = true;
      this.colorActiveTwo = false;
  };

  toggleColor() {
    this.colorActive = true;
    this.colorActiveTwo = false;
  };

  toggleColorTwo() {
    this.colorActive = false;
    this.colorActiveTwo = true;
  };

  resetState() {
    this.store.dispatch(
      new getJwt({
        access_token: undefined,
        fullname: undefined,
        id: undefined,
        role: undefined,
        username: undefined,
        image: undefined,
      })
    );

    this.users.role = '';
  };

}
