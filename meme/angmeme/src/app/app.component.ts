import {Component, OnInit, NgZone, AfterViewInit, ElementRef} from '@angular/core';
import {ImagesComponent} from "./images/images.component";
import { HttpClient } from '@angular/common/http';
import axios from 'axios';
import {BannerComponent} from "./banner/banner.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{

  constructor(private ngZone: NgZone, private elementRef: ElementRef) { }

  ngOnInit() {
    if (localStorage.getItem('profile')){
      this.ngZone.run(() => {
        AppComponent.login = true
        this.isLogin = true;
      });
    }
    if (localStorage.getItem('isMine').valueOf() == 'true') {
      console.log("is mine is true")
      this.isMine = true
    }
    else if (localStorage.getItem('isMine').valueOf() == 'false') {
      this.isMine = false
      console.log("is mine is false")

    }
  }
  update() {
    this.ngOnInit();
  }

  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightgray';
  }

  static login : boolean = false;
  static mine : boolean;
  static clicked : boolean;
  isLogin = AppComponent.login;
  isMine = AppComponent.mine;

}



