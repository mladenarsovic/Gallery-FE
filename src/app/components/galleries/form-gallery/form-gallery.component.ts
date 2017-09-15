import { Component, OnInit } from '@angular/core';

import { GalleriesService } from '../../../shared/services/galleries.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Gallery } from '../../../shared/models/gallery.model';

@Component({
  selector: 'app-form-gallery',
  templateUrl: './form-gallery.component.html',
  
})

export class FormGalleryComponent implements OnInit {

    private newGalery: Gallery  = new Gallery();
  
    private galeryUrl: string[] = [""];
    private number: number = 1;

  constructor(private galleryService: GalleriesService,
              private authService: AuthService) { }

  addItem(){
    this.galeryUrl.push('');
    this.number ++;
  }

  removeItem(){
    this.galeryUrl.pop();
    this.number --;
  }

  addGallery(newGallery){
    const user = this.authService.getUser();
    newGallery.userId = user.id;
    this.galleryService.addGallery(newGallery).subscribe();
    this.galeryUrl.forEach((images) => {
       this.galleryService.addImagesOnGallery(images).subscribe();
    });
  }

  ngOnInit() {
  }

}