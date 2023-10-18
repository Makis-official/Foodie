import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.service';
import { Notify } from 'notiflix';
import { HttpErrorResponse } from '@angular/common/http';

export interface foodValue{
  calories: number;
  fats: number;
  carbohydrates: number;
  belki: number;
}

@Component({
  selector: 'app-create-recept',
  templateUrl: './create-recept.component.html',
  styleUrls: ['./create-recept.component.css']
})
export class CreateReceptComponent implements OnInit {

  constructor(public serv: PostsService) {}

  inputFile: any;
  valuess = <foodValue>{};
  oneShagTitle: string = '';
  oneShagBody: string = '';

  ngOnInit(): void {

  }

  createdRecept() {
    this.serv.onePost.additionalInformation.details[0].title = this.oneShagTitle;
    this.serv.onePost.additionalInformation.details[0].body = this.oneShagBody;
    this.serv.onePost.foodValue = this.valuess;
    //console.log(this.serv.onePost);

    this.serv.createPost().subscribe({
      next: (value) => {
        Notify.success('Пост успешно создан!');
        //console.log(value);
      },
      error: (err: HttpErrorResponse) => {
        if(err.status === 404 || err.status === 401 || err.status === 502)
        {
          Notify.failure('Ошибка сервера! Не удалось создать пост');
        }
      }
    });
  };


  hiden = false;
  onFileChange(event: any): void {
    this.inputFile = event.target.files[0];
    
    if(this.inputFile.size < 10*1024*1024) {
      console.log(this.inputFile.size);
      this.hiden = true;
    } else {
      Notify.failure('Изображение больше нормы!');
    }
  };

  deleteFile() {
    this.inputFile = '';
    this.hiden = false;
  };

}
