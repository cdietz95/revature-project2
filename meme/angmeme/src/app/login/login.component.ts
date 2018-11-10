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

  onLogin(event){
    event.preventDefault();
    fetch('http://localhost:8080/user-api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + localStorage.getItem('profile')

      },
      body: JSON.stringify({
        username: (<HTMLInputElement>document.getElementById('uname1')).value,
        password: (<HTMLInputElement>document.getElementById('pwd')).value
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        if (res.status == 401 || res.status == 400) {
          throw{};
        }
      }
    }).then(token => {
      localStorage.setItem('profile',token.idToken);
      localStorage.setItem('username', token.userName);
      localStorage.setItem('userId', token.userId);
      location.href = "http://localhost:4200";
    }).catch(error => {
    });
  }

  onCreate(event){
    event.preventDefault();
    fetch('http://localhost:8080/user-api/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + localStorage.getItem('profile')

      },
      body: JSON.stringify({
        username: (<HTMLInputElement>document.getElementById('uName')).value,
        password: (<HTMLInputElement>document.getElementById('password')).value,
        email: (<HTMLInputElement>document.getElementById('email1')).value,
        firstName: (<HTMLInputElement>document.getElementById('fName')).value,
        lastName: (<HTMLInputElement>document.getElementById('lName')).value,
      })
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        if (res.status == 401 || res.status == 400) {
          throw{};
        }
      }
    }).then(token => {
      localStorage.setItem('profile',token.idToken);
      localStorage.setItem('username', token.userName);
      localStorage.setItem('userId', token.userId);
      location.href = "http://localhost:4200";
    }).catch(error => {
    });
  }

}
