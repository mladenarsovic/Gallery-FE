import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Gallery } from '../../../shared/models/gallery.model';
import { GalleriesService } from '../../../shared/services/galleries.service';

@Component({
  selector: 'app-single-gallery',
  templateUrl: './single-gallery.component.html',
  styleUrls: ['./single-gallery.component.css']
})
export class SingleGalleryComponent implements OnInit {

  private gallery={}; 

  constructor(private galleryService: GalleriesService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.galleryService.getGalleryById(id).subscribe(
     data => {
       this.gallery = data;
       console.log(this.gallery);
     }
   );
  }

}
