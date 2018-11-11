

import { Component, OnInit } from '@angular/core';
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

  // pics = [this.url.concat('test/tmry7yys3f3w6tyzxj6a.png'), this.url.concat('test/nsdk5rlwelowxvocycdx.png'), this.url.concat('test/vqefmdlwgrxrpgbo3u2l.gif'),
  //   this.url.concat('test/efeh0npwyekchwhjcgbs.png'), this.url.concat('test/ij5qk3hbobgjwno45gxo.gif'), this.url.concat('test/sd0nlkeyqfvglrfogrhs'),
  //   this.url.concat('test/tgi3c18mm5tp9e03pm48.png'), this.url.concat('test/remokdpfydqh9ronf0gd.png'), this.url.concat('test/tr6ov0wld5tjcolkkaio.jpg')];

  CLOUDINARY_URL: String  = 'https://api.cloudinary.com/v1_1/memecloud/upload/';
  CLOUDINARY_UPLOAD_PRESET: String = 'mybmtjtx';

  selectedFile: File = null;

  constructor(private http: HttpClient) {};

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
    let fullUrl = event.srcElement.currentSrc
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

  thumbs(thmbType){
    console.log("thumb type is " + thmbType)
    console.log(document.getElementById("img01"));

    fetch('http://localhost:8080/vote-api/vote', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // 'Authorization': 'Bearer ' + localStorage.getItem('profile')

      },
      body: JSON.stringify({
        userID: localStorage.getItem('userId'),
        voteValue: thmbType,
        postId: document.getElementById('img01'),
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
