import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { GalleriesComponent } from './components/galleries/galleries.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormGalleryComponent } from './components/galleries/form-gallery/form-gallery.component';
import { GalleriesRowComponent } from './components/galleries/galleries-row/galleries-row.component';

import { GalleriesService } from './shared/services/galleries.service';
import { AuthService } from './shared/services/auth.service';
import { UsersService } from './shared/services/users.service';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { SingleGalleryComponent } from './components/galleries/single-gallery/single-gallery.component';
import { MyGalleryComponent } from './components/galleries/my-gallery/my-gallery.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    GalleriesComponent,
    LoginComponent,
    RegisterComponent,
    FormGalleryComponent,
    FilterPipe,
    GalleriesRowComponent,
    SingleGalleryComponent,
    MyGalleryComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
    CustomFormsModule
  ],
  providers: [GalleriesService, AuthService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
