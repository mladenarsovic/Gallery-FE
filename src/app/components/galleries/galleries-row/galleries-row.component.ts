import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from '../../../shared/models/gallery.model';
import { Router, ActivatedRoute } from '@angular/router';

import { GalleriesService } from '../../../shared/services/galleries.service';
import { CommentsService } from '../../../shared/services/comments.service';
import { Comments } from '../../../shared/models/comments.model';

@Component({
  selector: '[galleryRow]',
  templateUrl: './galleries-row.component.html',
  
})
export class GalleriesRowComponent implements OnInit {

  private gallery: Gallery;
  private comments: Comments[] = [];

  @Input()
    set galleryRow(gallery: Gallery){
      this.gallery = gallery;
      console.log(gallery);
    }

  constructor(private commentsSevice: CommentsService,
              private router: ActivatedRoute,
              private gallerySer: GalleriesService) { }

  ngOnInit() {
   
  }


}