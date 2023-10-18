import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { Store } from '@ngxs/store';
import { jwtState } from './store/user.state';
import { PostsService } from './services/posts.service';
import { AddPost } from './store/model/allAdminPost.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Foodie';

  constructor(private PostServ: PostsService, public users: UsersService, private store: Store) {}
    userRole = false;

    currentAuth = this.store.selectSnapshot(jwtState.getAuthObject);

    ngOnInit(): void {
      this.PostServ.getAllPost().subscribe({
        next: (value) => {
          this.PostServ.allPosts = value;

          for(let i = 0; i < this.PostServ.allPosts.length; i++)
          {
            this.add(i);
          }
        }
      });
    }

    add(id: number) {
      this.store.dispatch(new AddPost(this.PostServ.allPosts[id]));
    };
}
