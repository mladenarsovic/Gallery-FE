import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { GalleriesService } from '../../shared/services/galleries.service';
import { ImagesService } from '../../shared/services/images.service';
import { AuthService } from '../../shared/services/auth.service';

import { Gallery } from '../../shared/models/gallery.model';





@Component({
  selector: 'app-galery',
  templateUrl: './galleries.component.html',
 
})
export class GalleriesComponent implements OnInit {

  private galleries: Gallery[] = [];


 
  constructor(private galleryService: GalleriesService,
              private authService: AuthService) { }

  ngOnInit() {
    this.galleryService.getGallery().subscribe(
      (value) => {
        this.galleries = value;
      },(err: HttpErrorResponse)=>{
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      });
   }

   nextPage(){
    this.galleryService.nextPage().subscribe(
     (data => {
       data.forEach((gallery: Gallery) =>{
         this.galleries.push(gallery);
       })
     }),
     (err: HttpErrorResponse) => {
       alert(`Backend Error with code ${err.status} and status ${err.error}`);
     })
  }

  search(term){
    this.galleryService.searchGallery(term).subscribe(
      (value) => {
        this.galleries = value;
      },(err: HttpErrorResponse)=>{
        alert(`Backend returned code ${err.status} with message: ${err.error}`);
      });    
  }

}