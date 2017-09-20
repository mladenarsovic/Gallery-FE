import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { Router } from '@angular/router'

import { AuthService } from './auth.service';

import { Gallery } from '../../shared/models/gallery.model';

@Injectable()
export class GalleriesService {
  
  public currentPage: number;
  public paginate: number = 1;
  public paginateLast: number;

  private gallery: Gallery[] = [];

  constructor(private http: HttpClient,
              private authService: AuthService,
              private router: Router) { }

  getGallery(){
     return new Observable((observer: Observer<any>)=>{
      this.http.get('http://localhost:8000/api/galleries',{
        headers: this.authService.getRequestHeaders()
      })
      .subscribe((gallery: any)=>{
        this.paginateLast = gallery.last_page;
        this.currentPage = gallery.current_page;
        this.gallery = gallery.data.map((gallery)=>{
           return new Gallery(gallery.id, gallery.name, gallery.description,  gallery.user, gallery.images, gallery.comments);
        });
        observer.next(this.gallery);
        return observer.complete();
      })
    })
  }

  nextPage(){
    return new Observable((observer: Observer<any>)=>{
     this.http.get('http://localhost:8000/api/gallery?page='+this.paginate,{
       headers: this.authService.getRequestHeaders()
     })
     .subscribe((gallery: any)=>{
       this.paginateLast = gallery.last_page;
       this.currentPage += 1;
       this.gallery = gallery.data.map((gallery)=>{
          return new Gallery(gallery.id, gallery.name, gallery.description, gallery.user, gallery.images, gallery.comments);
       });
       observer.next(this.gallery);
       return observer.complete();
     })
   })
 }

 noMorePage(){
  if(this.currentPage < this.paginateLast){
    return true;
  }
  return false;
}
 

  addGallery(newGallery){
    console.log(newGallery)
    return new Observable((observer: Observer<any>)=>{
      this.http.post('http://localhost:8000/api/gallery',{
        name: newGallery.name,
        description: newGallery.description,
        user_id: newGallery.userId,
        image_url: newGallery.imagesUrl
      },{
        headers: this.authService.getRequestHeaders()
      }).subscribe((newGallery: any)=>{
        
        let galleries = new Gallery(newGallery.user_id, newGallery.name, newGallery.description, newGallery.imagesUrl);
        this.gallery.push(galleries);
        observer.next(galleries);
        this.router.navigateByUrl('myGallery');
        return observer.complete();
      },()=>{
        alert('Error');
      });
    })    
  }


  getSingleGallery(){
    return new Observable((observer: Observer<any>)=>{
      this.http.get('http://localhost:8000/api/indexId',{
        headers: this.authService.getRequestHeaders()
      })
      .subscribe((gallery: any[])=>{
        this.gallery = gallery;
        observer.next(this.gallery);
        return observer.complete();
      })
    })
  }

  getGalleryById(id: number){
    return new Observable((o: Observer<any>) => {
      this.http.get('http://localhost:8000/api/gallery/' + id, {
        headers: this.authService.getRequestHeaders()
      })
      .subscribe((gallery: any) => {
        o.next(gallery);
        return o.complete();
    });
    });
  }

  myGallery(id){
    return new Observable((observer: Observer<any>)=>{
      this.http.get('http://localhost:8000/api/users/'+id+'/galleries',{
        headers: this.authService.getRequestHeaders()
      })
      .subscribe((gallery: any[])=>{
        this.gallery = gallery.map((gallery)=>{
           return new Gallery(gallery.id, gallery.name, gallery.description, gallery.user, gallery.images, gallery.comments);
        });
        observer.next(this.gallery);
        return observer.complete();
      })
    })
  }

  removeGallery(gallery: Gallery)
  {
    return new Observable((o: Observer<any>) => {

      this.http.delete('http://localhost:8000/api/gallery/'+ gallery.id,
      {
        headers: this.authService.getRequestHeaders()
      })
      .subscribe(()=>{
       const index = this.gallery.indexOf(gallery);
       this.gallery.splice(index, 1);

       o.next(index);
       return o.complete();
      });
    });
  }

  searchGallery(term){
    return new Observable((observer: Observer<any>)=>{
     this.http.get('http://localhost:8000/api/search/'+term,{
       headers: this.authService.getRequestHeaders()
     })
     .subscribe((gallery: any)=>{
       this.paginateLast = gallery.last_page;
       this.currentPage = gallery.current_page;
       this.gallery = gallery.data.map((gallery)=>{
          return new Gallery(gallery.id, gallery.name, gallery.description, gallery.user, gallery.images, gallery.comments);
       });
       observer.next(this.gallery);
       return observer.complete();
     })
   })
  }

}

