import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { AuthService } from './auth.service';

import { Comment } from '../../shared/models/comment.model'; 

@Injectable()
export class CommentsService {

  private comments: Comment[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService) { }

  addComments(newComments){
    return new Observable((observer: Observer<any>)=>{
      this.http.post('http://localhost:8000/api/comments/',{
        content: newComments.content,
        user_id: newComments.userId,
        galery_id: newComments.galleryId
      }).subscribe((newComments: any)=>{
        let comment = new Comment(newComments.content, newComments.userId, newComments.galleryId);
        this.comments.push(comment);
        observer.next(comment);
        return observer.complete();
      },()=>{
        alert('Error');
      });
    })
  }

}