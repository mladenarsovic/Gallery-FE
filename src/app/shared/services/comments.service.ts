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

    addComment(newComment){
    return new Observable((observer: Observer<any>)=>{
        this.http.post('http://localhost:8000/api/comments/',{
        content: newComment.content,
        user_id: newComment.userId,
        gallery_id: newComment.galleryId
        },{
        headers: this.authService.getRequestHeaders()
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