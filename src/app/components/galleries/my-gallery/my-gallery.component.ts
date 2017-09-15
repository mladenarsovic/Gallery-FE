import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Gallery } from '../../../shared/models/gallery.model';

import { GalleriesService } from '../../../shared/services/galleries.service';

@Component({
  selector: 'app-my-gallery',
  templateUrl: './my-gallery.component.html',
  styleUrls: ['./my-gallery.component.css']
})
export class MyGalleryComponent implements OnInit {

  private userID;
  private gallery: Gallery;

  constructor(private authService: AuthService,
              private galleryService: GalleriesService) { }

  ngOnInit() {
    this.userID = this.authService.getUser();
    this.galleryService.myGallery(this.userID.id)
    .subscribe(
      (value)=>{        
        this.gallery = value
        console.log(this.gallery)
     });
  }

}
