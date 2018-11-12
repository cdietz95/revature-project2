import {Component, ElementRef, NgZone, OnInit} from '@angular/core';
import {ImagesComponent} from "../images/images.component";
import {AppComponent} from "../app.component";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  static clicked = true


  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  home(event){
    this.ngZone.run(() => {
      console.log("banner clicked");
      localStorage.setItem('isMine','false');
      location.href = "http://localhost:4200";
    });
  }

}
