import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  noLogin =() => {
    document.getElementById("loginWrapper").style.display = 'none'
    document.getElementById("createLoginWrapper").style.display = 'block'
    // document.getElementById('noLogin').checked = false
  }


  haveLogin = () => {
    document.getElementById("loginWrapper").style.display = 'block'
    document.getElementById("createLoginWrapper").style.display = 'none';
    // document.getElementById('haveLogin').checked = false
  }

}
