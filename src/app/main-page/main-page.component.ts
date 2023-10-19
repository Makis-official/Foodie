import { Component, OnInit} from '@angular/core';
import { Recept } from '../interfaces/recept';
import { PostsService } from '../services/posts.service';
import { Meta } from '@angular/platform-browser';
import { Store } from '@ngxs/store';
import { AddSubPost, DeleteSubPost } from '../store/model/subPost.model';
import { SubPostsState } from '../store/subPost.state';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit{

  constructor(private store: Store, public postServ: PostsService, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Сборник кулинарных рецептов, для всей семьи'},
      {name: 'name', content: 'Foodie: Главная'},
    ]);
  }


  stateSubpost = this.store.selectSnapshot(SubPostsState.getSubPostsObject);

  tost = false;
  email: string = '';
  myInterval = 5000;
  activeSlideIndex = 0;
  users: Recept[] = [];
  favoritePost: Recept[] = [];
  BestRecept: Recept[] = [];
  FourRecept: Recept[] = [];
  OneFavoritePost = <Recept>{};
  AllfavoritePost: Recept[] = [];
  otherBestrecept = false;
  otherBestrecept_btn = true;
  DivVisible = true;
  storageKey = 'divVis';
  color = false;

  ngOnInit(): void {
      this.allPosts();

      const isDivVisibleFromStorage = JSON.parse(localStorage.getItem(this.storageKey)!);
      this.DivVisible = isDivVisibleFromStorage == null ? true : isDivVisibleFromStorage;
  }
  
  otherRecepts(){
    this.otherBestrecept = true;
    this.otherBestrecept_btn = false;
  };
  

  allPosts(){
    this.postServ.getAllPost().subscribe({
      next: (value: Recept[]) => {
        this.users = value; 
        //console.log(this.users.length);
        this.favoriteRecepts();

        for(let i = 0; i < this.users.length; i++)
        {
          this.postServ.colors.push(this.color);
        }

        for(let i = 0; i < this.stateSubpost.length; i++)
        {
          this.postServ.colors[this.stateSubpost[i].id] = true;
        }
        
        for(let i = 0; i < 6; i++)
        {
          var rand = Math.floor(Math.random() * this.users.length);
          this.BestRecept.push(this.users[rand]);
          //console.log(this.BestRecept);
        }

        for(let i = 0; i < 4; i++)
        {
          var rand = Math.floor(Math.random() * this.users.length);
          this.FourRecept.push(this.users[rand]);
          //console.log(this.FourRecept);
        }
      }
    });
    
  };

  favoriteRecepts(){
    this.favoritePost = this.users.filter(todo => todo.favorite == true);
    //console.log('favorite',this.favoritePost);
  };

  close() {
    this.tost = false;
  };
  
  subPost: any;
  subRecept(id:number, title:string) {
    this.subPost = this.users.find((element) => element.title === title);
    
    this.postServ.colors[this.subPost.id] = !this.postServ.colors[this.subPost.id];
    this.tost = true;

    if(this.postServ.colors[this.subPost.id]) {
      setTimeout(()=> {
        this.tost = false;
      }, 3000);

      this.store.dispatch(new AddSubPost(this.subPost));
    } else {
      this.tost = false;
      this.store.dispatch(new DeleteSubPost(this.subPost.id));
    }
    
  };

  subscribe() {
    Notify.success('Вы успешно подписаны на рассылку!');
  };

  closeBanner() {
    this.DivVisible = false;
    localStorage.setItem(this.storageKey, JSON.stringify(false));
  };
}
