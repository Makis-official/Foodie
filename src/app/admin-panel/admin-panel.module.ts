import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EditingPostComponent } from './editing-post/editing-post.component';
import { AdminRoutingModule } from './admin-routing.module';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { UsersComponent } from './users/users.component';
import { roleGuard } from '../role.guard';
import { PostsService } from '../services/posts.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AdminPanelComponent,
    EditingPostComponent,
    AllPostsComponent,
    UsersComponent,
  ],
  imports: [
    AdminRoutingModule,
    CommonModule,
    TabsModule.forRoot(),
    FormsModule,
  ],
  providers: [roleGuard, PostsService],
})

export class AdminPanelModule { }
