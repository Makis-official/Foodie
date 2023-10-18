import { Component, OnInit } from '@angular/core';
import { UsersService } from '.././services/users.service';
import { getJwt} from '.././store/model/authUser.model'
import { Store } from '@ngxs/store';
import { jwtState } from '../store/user.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public users: UsersService, private store: Store) {}
    userRole = false;

    currentAuth = this.store.selectSnapshot(jwtState.getAuthObject);

    ngOnInit(): void {
      this.store.select(jwtState.getAuthObject).subscribe({
        next: (value) => {
          this.currentAuth = value;
        }
      });

    }
    
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
