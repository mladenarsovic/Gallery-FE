import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

import { Comments } from '../../shared/models/comments.model'; 

@Injectable()
export class CommentsService {

  private comments: Comments[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  addComments(newComments){
    return new Observable((observer: Observer<any>)=>{
      this.http.post('http://localhost:8000/api/comments/',{
        content: newComments.content,
        user_id: newComments.userId,
        gallery_id: newComments.galleryId
      },{
        headers: this.authService.getRequestHeaders()
      }).subscribe((newComments: any)=>{
        let comment = new Comments(newComments.content, newComments.userId, newComments.galleryId);
        this.comments.push(comment);
        observer.next(comment);
        return observer.complete();
      },()=>{
        alert('Error');
      });
    })
  }

  removeComment(comment: Comments)
  {
    return new Observable((o: Observer<any>) => {

      this.http.delete('http://localhost:8000/api/comments/'+ comment.id,
      {
        headers: this.authService.getRequestHeaders()
      })
      .subscribe(()=>{
       const index = this.comments.indexOf(comment);
       this.comments.splice(index, 1);

       o.next(index);
       return o.complete();
      });
    });
  }

}