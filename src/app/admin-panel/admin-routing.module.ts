import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EditingPostComponent } from './editing-post/editing-post.component';
import { AllPostsComponent } from './all-posts/all-posts.component';
import { UsersComponent } from './users/users.component';
import { roleGuard } from '../role.guard';


const routes: Routes = [
  {
    path: '',
    component: AdminPanelComponent,
    children: [
      {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
      },
      {
        path: 'users',
        component: UsersComponent,
        title: 'Управление рецептами',
      },
      {
        path: 'recipes',
        component: AllPostsComponent,
        title: 'Управление рецептами',
      },
      {
        path: 'recipes/:id',
        component: EditingPostComponent,
        title: 'Управление рецептами',
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }