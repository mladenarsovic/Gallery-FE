import { Component, OnInit, Input } from '@angular/core';
import { Gallery } from '../../../shared/models/gallery.model';
import { Router, ActivatedRoute } from '@angular/router';

import { GalleriesService } from '../../../shared/services/galleries.service';


@Component({
  selector: '[galleryRow]',
  templateUrl: './galleries-row.component.html',
  
})

export class GalleriesRowComponent implements OnInit {

    


  @Input() galleryRow: Gallery;
    

  constructor() { }

  ngOnInit() {
   
  }

}