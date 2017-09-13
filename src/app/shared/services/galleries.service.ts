import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { AuthService } from './auth.service';

import { Gallery } from '../../shared/models/gallery.model';

@Injectable()

export class GalleriesService {

  private gallery: Gallery[] = [];
  
    constructor(private http: HttpClient,
                private authService: AuthService) { }
  
    getGalery(){
      return new Observable((observer: Observer<any>)=>{
        this.http.get('http://localhost:8000/api/galleries',{
          headers: this.authService.getRequestHeaders()
        })
        .subscribe((gallery: any[])=>{
          this.gallery = gallery.map((gallery)=>{
            return new Gallery(gallery.id, gallery.name, gallery.description, gallery.imageUrl);
          });
          observer.next(this.gallery);
          return observer.complete();
        })
      })
    }

    addGallery() {
      
    }

}
