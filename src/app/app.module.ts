import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormGalleryComponent } from './components/galleries/form-gallery/form-gallery.component';

import { GalleriesService } from './shared/services/galleries.service';
import { AuthService } from './shared/services/auth.service';
import { UsersService } from './shared/services/users.service';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GalleriesComponent,
    LoginComponent,
    RegisterComponent,
    FormGalleryComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [GalleriesService, AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
