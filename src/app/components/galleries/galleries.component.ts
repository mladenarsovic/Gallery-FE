import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { GalleriesService } from '../../shared/services/galleries.service';
import { Gallery } from '../../shared/models/gallery.model';


@Component({
  selector: 'app-galleries',
  templateUrl: './galleries.component.html',
  
})
export class GalleriesComponent implements OnInit {

  private galleries: Gallery[] = [];
  
    constructor(private galleryService: GalleriesService) { }
  
    ngOnInit() {
      this.galleryService.getGalery().subscribe(
        (value) => {
          this.galleries = value
        },(err: HttpErrorResponse)=>{
          alert(`Backend returned code ${err.status} with message: ${err.error}`);
        }
  
  
      );
    }

}
