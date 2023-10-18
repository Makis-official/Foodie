import { Injectable } from '@angular/core';
import { Recept } from '../interfaces/recept';
import { HttpClient } from '@angular/common/http';
import { BigOneRecept } from '../interfaces/big-one-recept';
import { AdminOnePost } from '../interfaces/admin-one-post';
import { UsersService } from './users.service';
import { PostInState } from '../store/model/allAdminPost.model';
import { CreatePost } from '../interfaces/create-post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private user: UsersService, private http: HttpClient) { }

  footerBanner = true;
  colors: boolean[] = [];
  allPosts: PostInState[] = [];
  adminEditinPost = true;

  getAllPost() {
    return this.http.get<Recept[]>('https://ea-backend.wckz.space/posts');
  };  
  
  idPost: string | undefined;
  getOnePost() {
    return this.http.get<BigOneRecept>('https://ea-backend.wckz.space/posts/' + this.idPost);
  };

  post = <BigOneRecept>{};
  editingOnePost() {
    return this.http.patch<AdminOnePost>('https://ea-backend.wckz.space/posts/' + this.idPost, this.post, {'headers': {"Authorization": [`Bearer ${this.user.token}`]}});
  };

  deleteId: number = 0;
  deleteOnePost() {
    return this.http.delete('https://ea-backend.wckz.space/posts/' + this.deleteId, {'headers': {"Authorization": [`Bearer ${this.user.token}`]}});
  };

  onePost = <CreatePost>{
    favorite: false,
    image: 'image',
    additionalInformation: {
      
        ingredients: [
          '',
        ],
        details: [
        {
            title: '',
            body: '',
        },
        ]
    }
  };
  createPost() {
    return this.http.post('https://ea-backend.wckz.space/posts', this.onePost, {'headers': {"Authorization": [`Bearer ${this.user.token}`]}});
  };
}
