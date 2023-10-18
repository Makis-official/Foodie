import { Component, OnInit, TemplateRef } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';
import { Store } from '@ngxs/store';
import { PostsState } from 'src/app/store/posts.state';
import { PostInState } from 'src/app/store/model/allAdminPost.model';
import { DeletePost } from 'src/app/store/model/allAdminPost.model';
import { BigOneRecept } from 'src/app/interfaces/big-one-recept';
import { HttpErrorResponse } from '@angular/common/http';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Notify } from 'notiflix';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit{

  constructor(private modalService: BsModalService, private store: Store, private postServ: PostsService) {}
  allPost: PostInState[] = [];
  allPostServ: PostInState[] = [];
  onePost = <BigOneRecept>{};

  ngOnInit(): void {
    this.store.select(PostsState.getPostsObject).subscribe({
      next: (value) => {
        this.allPost = value
      }
    })
  };

  id: number = 0;
  getId(id: number) {
    this.id = id;
    console.log(this.id);
  }

  deletePost(id: number) {
    this.postServ.deleteId = id;
    
    this.postServ.deleteOnePost().subscribe({
      next: (value) => {
        this.store.dispatch(new DeletePost(id));
        Notify.success('Пост успешно удален!');
      },
      error: (err: HttpErrorResponse) => {
        if(err.status === 404 || err.status === 401 || err.status === 502)
        {
          Notify.failure('Ошибка сервера!');
        }
      }
    });

  };

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, {class: 'modal-sm'});
  }

  modalRef?: BsModalRef;
  confirm(): void {
    this.modalRef?.hide();
  };
 
  decline(): void {
    this.modalRef?.hide();
  };

}
