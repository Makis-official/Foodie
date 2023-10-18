import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { AvtorizationComponent } from './avtorization/avtorization.component';
import { OneReceptComponent } from './one-recept/one-recept.component';
import { ErrorComponent } from './error/error.component';
import { AllReceptsComponent } from './all-recepts/all-recepts.component';
import { allPost } from './all-recepts/all-post.resolver';
import { NotPageComponent } from './not-page/not-page.component';
import { roleGuard } from './role.guard';
import { CreateReceptComponent } from './create-recept/create-recept.component';
import { roleGuardCreatePost } from './roleForCreatePost.guard';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: "error",
    component: ErrorComponent,
    title: "Ошибка",
  },
  {
    path: 'recipe',
    component: AllReceptsComponent,
    title: "Foodie: Каталог рецептов",
    resolve: [allPost],
  },
  {
    path: "recipe/:id",
    component: OneReceptComponent,
  },
  {
    path: "admin", 
    canActivate: [roleGuard],
    loadChildren: () => import('./admin-panel/admin-panel.module').then(m=>m.AdminPanelModule),
  },
  {
    path: "register",
    component: RegistrationComponent,
    title: "Регистрация",
  },
  {
    path: "auth",
    component: AvtorizationComponent,
    title: "Авторизация",
  },
  { 
    path: '', 
    component: MainPageComponent, 
    title: "Foodie: Главная",
  },
  {
    canActivate: [roleGuardCreatePost],
    path: 'create-recipe',
    component: CreateReceptComponent,
    title: "Создание рецепта",
  },
  { 
    path: '**', 
    component: NotPageComponent,
    title: "Страница не найдена",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
