import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleriesService } from './services/galleries.service';
import { HttpClientModule } from '@angular/common/http';

import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
  	GalleriesService,    
    GuestGuard,
    AuthService
  ],
  declarations: [
  ],
  exports: [
  ]
})
export class SharedModule { }
