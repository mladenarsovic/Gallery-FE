import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Gallery } from '../../../shared/models/gallery.model';
import { Comment } from '../../../shared/models/comment.model';

import { GalleriesService } from '../../../shared/services/galleries.service';
import { AuthService } from '../../../shared/services/auth.service';
import { CommentsService } from '../../../shared/services/comments.service';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.css']
})
export class SingleGalleryComponent implements OnInit {

  private gallery={}; 
  private newComment: Comment = new Comment();

  constructor(private galleryService: GalleriesService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private commentsService: CommentsService) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.galleryService.getGalleryById(id).subscribe(
     data => {
       this.gallery = data;
       console.log(this.gallery);
     }
   );
  }

  addComment(newComment){
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    let userId = this.authService.getUser();
    newComment.userId = userId.id;
    newComment.galleryId = id;
    this.commentsService.addComments(newComment).subscribe();
  }

}
