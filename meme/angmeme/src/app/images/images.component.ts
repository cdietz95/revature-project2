

import { Component, OnInit, NgZone } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import axios from "axios";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  title = 'memeapp';
  url: String = new String('https://res.cloudinary.com/memecloud/image/fetch/https://res.cloudinary.com/memecloud/image/upload/v1541178452/');
  post;
  pics : String[] = [];
  comments;
  static clicked = true;
  x;

  ngOnInit() {
    fetch('http://localhost:8080/post-api', {
      method: 'GET',
      headers: {
        'Content-Type' : 'application/json',
      }
    }).then(res => {
      if (res.ok) {
        return res.json();
      } else {
        if (res.status == 401 || res.status == 400) {
          throw{};
        }
      }
    }).then( val => {
      console.log(val);
      this.post = val;
      for (let v of val){
        this.pics.push(v.url)
      }

    }).catch(error => {
    });
  }

  CLOUDINARY_URL: String  = 'https://api.cloudinary.com/v1_1/memecloud/upload/';
  CLOUDINARY_UPLOAD_PRESET: String = 'mybmtjtx';

  selectedFile: File = null;

  constructor(private http: HttpClient, private ngZone: NgZone) {};

  openMeme(event){
    let fullUrl = event.srcElement.currentSrc;
    let splitUrl = fullUrl.split("fetch/")
    event.preventDefault();
    document.getElementById('myModal').style.display = "block";
    this.url = event.srcElement.currentSrc;
    console.log( splitUrl[1].concat("fetch/").concat(splitUrl[2]))
    document.getElementById("caption").style.display = "block";
    fetch('http://localhost:8080/comment-api/{c}', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + localStorage.getItem('profile')

      },
      body: JSON.stringify({
        postId:  splitUrl[1].concat("fetch/").concat(splitUrl[2])
      })
    }).then(res => {
      console.log(res)
      if (res.ok) {
        return res.json();
      } else {
        if (res.status == 401 || res.status == 400) {
          throw{};
        }
      }
    }).then( val =>{
      console.log(val);
      this.comments = val;
    }).catch(error => {
    });
  }


  comment(event){
    //event.srcElement.currentSrc;
    let fullUrl = event.srcElement.currentSrc;
    let splitUrl = fullUrl.split("fetch/")
    fetch('http://localhost:8080/comment-api/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + localStorage.getItem('profile')

      },
      body: JSON.stringify({
        content: (<HTMLInputElement>document.getElementById('commentBox')).value,
        userID: localStorage.getItem('userId'),
        postId: splitUrl[1].concat("fetch/").concat(splitUrl[2])
      })
    }).then(res => {
      console.log(res)
      if (res.ok) {
        return res.json();
      } else {
        if (res.status == 401 || res.status == 400) {
          throw{};
        }
      }
    }).catch(error => {
    });
  }



  closeMeme(event){
    event.preventDefault();
    document.getElementsByClassName("close")[0];
    document.getElementById('myModal').style.display = "none";
  }


  openTab(event){
    this.ngZone.run(() => {
      console.log('Meme Clicked')
      console.log(ImagesComponent.clicked)
      localStorage.setItem('isMine','true');
      location.href = "http://localhost:4200";
    });
  }

  openNewest(event){

  }

  openPop(event){
    let upVote : number[] = [];
    console.log(this.x)
    for(let i = 0; i < this.post.length; i++){
      this.ThmbCnt(1, this.post[i].url);
      console.log(this.x)
      upVote.push(this.x)
    }

  }

  openLeastPop(event){

  }

  openMostViewed(event){}

  logout(event){
    event.preventDefault();
    localStorage.removeItem('profile');
    localStorage.removeItem('username');
    localStorage.removeItem('userId');
    location.href = "http://localhost:4200";
  }


  onFileSelected(event) {
    event.preventDefault();
    this.selectedFile = <File>(<HTMLInputElement>event.target).files[0];
    if(this.selectedFile != null) {
      document.getElementById("after").style.display = "block";
    }
  }

  saveChanges(event) {
    event.preventDefault();
    console.log((<HTMLInputElement>document.getElementById('title')).value); //this is what I need to send back to the database (title)
    console.log((<HTMLInputElement>document.getElementById('captions')).value); //this is what I need to send back to the database (caption)
    document.getElementById("after").style.display = "none";
    this.onUpload(event);
  }

  thumbs(event, thmbType){
    // @ts-ignore
    let fullUrl = document.getElementById('img01').src;
    let splitUrl = fullUrl.split('fetch/');
    let sendUrl = splitUrl[1].concat("fetch/").concat(splitUrl[2])
    // console.log('Send url = ' + sendUrl);
    // console.log('local store = ' + localStorage.getItem('userId'))
    fetch('http://localhost:8080/vote-api/vote', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + localStorage.getItem('profile')

      },
      body: JSON.stringify({
        userID: localStorage.getItem('userId'),
        content: thmbType,
        postId: sendUrl
      })
    }).then(res => {
      if (res.ok) {
        switch (thmbType) {
          case 0:
            this.ThmbCnt(thmbType, sendUrl);
            break;
          case 1:
            this.ThmbCnt(thmbType, sendUrl);
            break;
        }
        return res.json();
      } else {
        if (res.status == 401 || res.status == 400) {
          throw{};
        }
      }
    }).catch(error => {
    });
}



  ThmbCnt(thmbType, sendURL){

    fetch('http://localhost:8080/vote-api/votepls', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + localStorage.getItem('profile')

      },
      body: JSON.stringify({
        id: thmbType,
        url: sendURL
      })
    }).then(res => {
      if (res.ok) {
        console.log("this is the resp from dwnthmbcnt " + res)
        return res.json();
      } else {
        if (res.status == 401 || res.status == 400) {
          throw{};
        }
      }
    }).then(val => {
       this.x = val
    }).catch(error => {
    });
  }

  onUpload(event){
    event.preventDefault();
    const fd = new FormData();

    console.log((<HTMLInputElement>document.getElementById('title')).value +"1"); //this is what I need to send back to the database (title)
    console.log((<HTMLInputElement>document.getElementById('captions')).value +"1"); //this is what I need to send back to the database (caption)

    fd.append('file', this.selectedFile);
    fd.append('upload_preset', 'mybmtjtx');
    fd.append('folder', 'test');

    axios({
      url: 'https://api.cloudinary.com/v1_1/memecloud/upload/',
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: fd
    }).then(function (res) {
      console.log(res);
      // location.reload();
      imageSaver(event, res);
    }).catch(function(err) {
      console.log(err);
    });
  };
}


function imageSaver(event, res) {

  const url='https://res.cloudinary.com/memecloud/image/fetch/https://res.cloudinary.com/memecloud/image/upload/v1541178452/';

  console.log("got to image saver");
  console.log(url)
  fetch('http://localhost:8080/post-api/post', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
      // 'Authorization': 'Bearer ' + localStorage.getItem('profile')

    },
    body: JSON.stringify({
      author: localStorage.getItem('userId'),
      title: (<HTMLInputElement>document.getElementById('title')).value,
      caption: (<HTMLInputElement>document.getElementById('captions')).value,
      url: url.concat(res.data.public_id)
    })
  }).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      if (res.status == 401 || res.status == 400) {
        throw{};
      }
    }
  }).catch(error => {
  });

}

