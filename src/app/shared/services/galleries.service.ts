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
  
    getGallery(){
      return new Observable((observer: Observer<any>)=>{
        this.http.get('http://localhost:8000/api/galleries',{
          headers: this.authService.getRequestHeaders()
        })
        .subscribe((gallery: any[])=>{
          this.gallery = gallery.map((gallery)=>{
            return new Gallery(gallery.id, gallery.name, gallery.description, gallery.images);
          });
          observer.next(this.gallery);
          return observer.complete();
        })
      })
    }

    addGallery(newGallery){
      console.log(newGallery);
      return new Observable((observer: Observer<any>)=>{
        this.http.post('http://localhost:8000/api/galleries',{
          name: newGallery.name,
          description: newGallery.description
        }).subscribe((newsGallery: any)=>{
          let galleries = new Gallery(newGallery.name, newGallery.description);
          this.gallery.push(galleries);
          observer.next(galleries);
          console.log('This works')
          return observer.complete();
        },()=>{
          alert('Error');
        });
      })
    }

    public getGalleryById(id: number){
      return new Observable((o: Observer<any>) => {
        this.http.get('http://localhost:8000/api/galleries/' + id, {
          headers: this.authService.getRequestHeaders()
        })
        .subscribe((gallery: any) => {

             o.next(gallery);
             return o.complete();
        })
      
      });
    }

    public addImagesOnGallery(images){
      
      return new Observable((observer: Observer<any>)=>{
        this.http.post('http://localhost:8000/api/pictures',{
          image_url: images,
        }).subscribe((images: any)=>{
          observer.next(images);
          return observer.complete();
        })
  
        
      })    
    }

    myGallery(id){
      return new Observable((observer: Observer<any>)=>{
        this.http.get('http://localhost:8000/api/users/'+id+'/galleries',{
          headers: this.authService.getRequestHeaders()
        })
        .subscribe((galery: any[])=>{
          this.gallery = galery.map((galery)=>{
             return new Gallery(galery.id, galery.name, galery.description,  galery.user, galery.images, galery.comments);
          });
          observer.next(this.gallery);
          return observer.complete();
        })
      })
    }
  

}
