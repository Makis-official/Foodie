import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsService } from 'src/app/services/posts.service';
import { BigOneRecept } from 'src/app/interfaces/big-one-recept';
import { HttpErrorResponse } from '@angular/common/http';
import { Notify } from 'notiflix';

export interface foodValue{
  calories: number;
  fats: number;
  carbohydrates: number;
  belki: number;
}

@Component({
  selector: 'app-editing-post',
  templateUrl: './editing-post.component.html',
  styleUrls: ['./editing-post.component.css']
})
export class EditingPostComponent implements OnInit {

  constructor(public postServ: PostsService, private route: ActivatedRoute) {}

  post = <BigOneRecept>{};
  one: string[] | undefined;
  valuess = <foodValue>{};
  oneShagTitle: string = '';
  oneShagBody: string = '';

  ngOnInit(): void {
      this.postServ.idPost = this.route.snapshot.paramMap.get('id')!;

      this.postServ.getOnePost().subscribe({
        next: (value) => {
          this.postServ.post = value;
          this.oneShagTitle = value.additionalInformation.details[0].title;
          this.oneShagBody = value.additionalInformation.details[0].body;
          this.one = value.additionalInformation.ingredients;
          this.valuess = value.foodValue;
        }
      });
  }

  print() {
    this.postServ.post.additionalInformation.details[0].title = this.oneShagTitle;
    this.postServ.post.additionalInformation.details[0].body = this.oneShagBody;
  };

  editpost() {
    this.postServ.post.additionalInformation.details[0].title = this.oneShagTitle;
    this.postServ.post.additionalInformation.details[0].body = this.oneShagBody;

    this.postServ.editingOnePost().subscribe({
      next: (value) => {
        Notify.success('Изменения успешно сохранены!');
      },
      error: (err: HttpErrorResponse) => {
        if(err.status === 404 || err.status === 401 || err.status === 502)
        {
          Notify.failure('Ошибка сервера! Сохранить изменения не получилось');
        }
      }
    });
  };



}
