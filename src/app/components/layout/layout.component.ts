import { Component, OnInit } from '@angular/core';
import { AuthService } from './../../shared/services/auth.service';
import { GalleriesService } from './../../shared/services/galleries.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  
})
export class LayoutComponent implements OnInit {

  constructor(private auth: AuthService,
              private galleryService: GalleriesService) { }

  ngOnInit() {
  }

}
