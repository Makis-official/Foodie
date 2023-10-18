import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { MainPageComponent } from './main-page/main-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AvtorizationComponent } from './avtorization/avtorization.component';
import { FormsModule } from '@angular/forms';
import { NgxsModule } from '@ngxs/store';
import { jwtState } from './store/user.state';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { OneReceptComponent } from './one-recept/one-recept.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { roleGuard } from './role.guard';
import { roleGuardCreatePost } from './roleForCreatePost.guard';
import { ErrorComponent } from './error/error.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AllReceptsComponent } from './all-recepts/all-recepts.component';
import { NotPageComponent } from './not-page/not-page.component';
import { UsersService } from './services/users.service';
import { PostsService } from './services/posts.service';
import { PostsState } from './store/posts.state';
import { CreateReceptComponent } from './create-recept/create-recept.component';
import { SubPostsState } from './store/subPost.state';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    MainPageComponent,
    AvtorizationComponent,
    OneReceptComponent,
    ErrorComponent,
    HeaderComponent,
    FooterComponent,
    AllReceptsComponent,
    NotPageComponent,
    CreateReceptComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule.forRoot(),
    FormsModule,
    NgxsModule.forRoot([jwtState, PostsState, SubPostsState]),
    NgxsLoggerPluginModule.forRoot(),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    ReactiveFormsModule,
    ModalModule.forRoot(),
    NgbModule, 
  ],
  providers: [UsersService, PostsService, roleGuard, roleGuardCreatePost],
  bootstrap: [AppComponent]
})
export class AppModule { }
