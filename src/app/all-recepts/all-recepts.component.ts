import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Recept } from '../interfaces/recept';
import { UsersService } from '../services/users.service';
import { Store } from '@ngxs/store';
import { AddSubPost, DeleteSubPost } from '../store/model/subPost.model';
import { SubPostsState } from '../store/subPost.state';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-all-recepts',
  templateUrl: './all-recepts.component.html',
  styleUrls: ['./all-recepts.component.css']
})
export class AllReceptsComponent implements OnInit {

  constructor(private store: Store, public user: UsersService, public serv: PostsService, private meta: Meta) {
    this.meta.addTags([
      {name: 'description', content: 'Все самые лучшие рецепты собраны здесь'},
      {name: 'name', content: 'Foodie: Каталог рецептов'},
    ]);
  }

  tost = false;
  allRec: Recept[] = [];
  stateSubpost = this.store.selectSnapshot(SubPostsState.getSubPostsObject);
  color = false;

  ngOnInit(): void {
    this.serv.getAllPost().subscribe({
      next: (value) => {
        this.allRec = value;
      }
    });

    for(let i = 0; i < this.stateSubpost.length; i++)
    {
      this.serv.colors[this.stateSubpost[i].id] = true;
    }
  }

  close() {
    this.tost = false;
  };

  subPost: any;
  subRecept(id:number, title:string) {
    this.subPost = this.allRec.find((element) => element.title === title);
    
    this.serv.colors[this.subPost.id] = !this.serv.colors[this.subPost.id];
 
    if(this.serv.colors[this.subPost.id]) {
      this.store.dispatch(new AddSubPost(this.subPost));
      this.tost = true;

      setTimeout(()=> {
        this.tost = false;
      }, 3000);

    } else {
      this.store.dispatch(new DeleteSubPost(this.subPost.id));
    }
  };

}
