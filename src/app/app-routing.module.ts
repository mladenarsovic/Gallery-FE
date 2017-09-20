import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';

import { GalleriesComponent } from './components/galleries/galleries.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormGalleryComponent } from './components/galleries/form-gallery/form-gallery.component'; 
import { SingleGalleryComponent } from './components/galleries/single-gallery/single-gallery.component';
import { MyGalleryComponent } from './components/galleries/my-gallery/my-gallery.component';


const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'galleries',
    pathMatch: 'full'
  },
  {
    path: 'galleries',
    component: GalleriesComponent,
  },
  {
    path: 'gallery/:id',
    component: SingleGalleryComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'galleries/:id',
    component: SingleGalleryComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'my-gallery',
    component: MyGalleryComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [ GuestGuard ]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [ GuestGuard ]
  },
  {
    path: 'create',
    component: FormGalleryComponent,
    canActivate: [ AuthGuard ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}