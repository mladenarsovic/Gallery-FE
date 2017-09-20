import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';

import { AuthService } from './auth.service';

import { Images } from '../models/images.model';

@Injectable()
export class ImagesService {

  private images: Images[] = [];

  constructor(private http: HttpClient,
              private authServices: AuthService) { }

  getImages(){
    return new Observable((observer: Observer<any>)=>{
        this.http.get('http://localhost:8000/api/images',{
          headers: this.authServices.getRequestHeaders()
        }).subscribe((image: any)=>{
          this.images = image.map((picture)=>{
            return new Images(image.id, image.imageUrl, image.galleryId);
          });
          observer.next(this.images);
          return observer.complete();
        },()=>{
          
        });
    })
  }


}