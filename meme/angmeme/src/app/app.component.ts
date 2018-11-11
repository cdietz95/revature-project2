import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn: boolean = false;
  isLogged(logged:boolean) {
    console.log("event fired " + this.loggedIn);
    this.loggedIn = logged;
    console.log("event fired 2 " + this.loggedIn);
  }

}
