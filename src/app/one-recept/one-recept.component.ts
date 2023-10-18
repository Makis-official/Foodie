import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { ActivatedRoute } from '@angular/router';
import { BigOneRecept } from '../interfaces/big-one-recept';
import { Recept } from '../interfaces/recept';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { AddSubPost, DeleteSubPost } from '../store/model/subPost.model';
import { SubPostsState } from '../store/subPost.state';

@Component({
  selector: 'app-one-recept',
  templateUrl: './one-recept.component.html',
  styleUrls: ['./one-recept.component.css']
})
export class OneReceptComponent implements OnInit{

  constructor(private store: Store, private router: Router, private meta: Meta, private title: Title, private modalService: BsModalService, public serv: PostsService, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  stateSubpost = this.store.selectSnapshot(SubPostsState.getSubPostsObject);
  tost = false;
  AllInfOneRecept? = <BigOneRecept> {};
  description: string = '';
  Allpost: Recept[] = [];
  ThreePost: Recept[] = [];
  FourPost: Recept[] = [];
  check: boolean[] = [];
  checkSteps: boolean[] = [];
  checkbox = false;

  ngOnInit(): void {
    window.scroll(0, 0);
    
    this.serv.idPost = this.route.snapshot.paramMap.get('id')!;

    this.serv.getAllPost().subscribe({
      next: (value) => {
        this.Allpost = value;

        for(let i = 0; i < 3; i++)
        {
        var rand = Math.floor(Math.random() * this.Allpost.length);
        this.ThreePost.push(this.Allpost[rand]);
        }

        for(let i = 0; i < this.stateSubpost.length; i++)
        {
          this.serv.colors[this.stateSubpost[i].id] = true;
        }

        for(let i = 0; i < 4; i++)
        {
          var rand = Math.floor(Math.random() * this.Allpost.length);
          this.FourPost.push(this.Allpost[rand]);
        }

      }
    });

    this.serv.getOnePost().subscribe({
      next: (value) => {
        
        this.AllInfOneRecept = value;

        this.meta.addTags([
          {name: 'description', content: value.body},
          {name: 'name', content: value.title},
          {name: 'image', content: value.image},
        ]);

        this.title.setTitle(value.title);

        for(let i = 0; i < this.AllInfOneRecept.additionalInformation.ingredients.length; i++)
        {
          this.check.push(this.checkbox);
        }

        for(let i = 0; i < this.AllInfOneRecept.additionalInformation.details.length; i++)
        {
          this.checkSteps.push(this.checkbox);
        }

      }
    });
  }

  modalRef?: BsModalRef;

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  };

  confirm(): void {
    this.modalRef?.hide();
  };
 
  decline(): void {
    this.modalRef?.hide();
  };

  print() {
    window.print();
  };

  onToggle(as:number) {
    this.check[as] = !this.check[as];
  };

  onToggleSteps(as:number) {
    this.checkSteps[as] = !this.checkSteps[as];
  };

  close() {
    this.tost = false;
  };

  subPost: any;
  subRecept(id:number, title:string) {
    this.subPost = this.Allpost.find((element) => element.title === title);
    
    this.serv.colors[this.subPost.id] = !this.serv.colors[this.subPost.id];

    this.tost = true;
    
    if(this.serv.colors[this.subPost.id]) {
      this.store.dispatch(new AddSubPost(this.subPost));

      setTimeout(()=> {
        this.tost = false;
      }, 3000);

    } else {
      this.store.dispatch(new DeleteSubPost(this.subPost.id));
    };
    
  };

}
