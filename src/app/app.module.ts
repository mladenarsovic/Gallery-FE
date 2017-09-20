import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation'

import { GalleriesService } from './shared/services/galleries.service';
import { UsersService } from './shared/services/users.service';
import { AuthService } from './shared/services/auth.service';
import { ImagesService } from './shared/services/images.service'; 
import { CommentsService } from './shared/services/comments.service'; 

import { AppComponent } from './app.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { CommentsComponent } from './components/comments/comments.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FormGalleryComponent } from './components/galleries/form-gallery/form-gallery.component';
import { GalleriesRowComponent } from './components/galleries/galleries-row/galleries-row.component';
import { SingleGalleryComponent } from './components/galleries/single-gallery/single-gallery.component';
import { MyGalleryComponent } from './components/galleries/my-gallery/my-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleriesComponent,  
    CommentsComponent,
    LayoutComponent,
    RegisterComponent,
    LoginComponent,
    FormGalleryComponent,
    GalleriesRowComponent,
    SingleGalleryComponent,
    MyGalleryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    CustomFormsModule

  ],
  providers: [
    GalleriesService,
    UsersService,
    AuthService,
    ImagesService,
    CommentsService  
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }