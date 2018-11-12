import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CloudinaryModule } from '@cloudinary/angular-5.x';
import * as Cloudinary from 'cloudinary-core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ImagesComponent } from './images/images.component';
import { UpdateComponent } from './update/update.component';
import { BannerComponent } from './banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ImagesComponent,
    UpdateComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CloudinaryModule.forRoot(Cloudinary, {cloud_name: 'memecloud'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
