import { Component, OnInit } from '@angular/core';

import { GalleriesService } from '../../../shared/services/galleries.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Gallery } from '../../../shared/models/gallery.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-gallery',
  templateUrl: './form-gallery.component.html',
  
})

export class FormGalleryComponent implements OnInit {

    private newGallery: Gallery  = new Gallery();  
    private galleryUrl: string[] = [""];
    private number: number = 1;

  constructor(private galleryService: GalleriesService,
              private authService: AuthService,
              private router: Router) {}

  addItem(){
    this.galleryUrl.push('');
    this.number ++;
  }

  removeItem(){
    this.galleryUrl.pop();
    this.number --;
  }

  trackByIndex(index: number, obj:any):any {
    return index;
  }

  addGallery(newGallery){
    const user = this.authService.getUser();
    newGallery.userId = user.id;
    newGallery.imagesUrl = this.galleryUrl;
    this.galleryService.addGallery(newGallery).subscribe();
  }

  ngOnInit() {
  }

  edit(gallery: Gallery) {
    this.newGallery = Object.assign({}, gallery);
  }
}