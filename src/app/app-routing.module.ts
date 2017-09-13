import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { GalleriesComponent } from './components/galleries/galleries.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent} from './components/register/register.component';
import { FormGalleryComponent } from './components/galleries/form-gallery/form-gallery.component';

import { AuthGuard } from './shared/guards/auth.guard';
import { GuestGuard } from './shared/guards/guest.guard';

const appRoutes = [
  {
    path: '',
    redirectTo: '/galleries',
    pathMatch: 'full'
  },
  {
    path: 'galleries',
    component: GalleriesComponent,
    canActivate: [ AuthGuard ] 
  },
  {
        path: 'login',
        component: LoginComponent,
        canActivate: [ GuestGuard ]
  }, 
  { 
    path: 'register',
    component: RegisterComponent,
    canActivate: [ GuestGuard ]
  },
  {
    path: 'create',
    component: FormGalleryComponent
  },
  // {
  //   path: 'add-gallery',
  //   component: FormGalleryComponent,
  //   canActivate: [ AuthGuard ],
  // }      
]


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [],
  exports: [
		RouterModule
	]
})
export class AppRoutingModule { }
