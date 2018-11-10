(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the tab */\r\n.tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #f1f1f1;\r\n  width: 23.2%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  background-color: inherit;\r\n  float: left;\r\n  border: 1px solid #ccc;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color: #ddd;\r\n}\r\n/* Create an active/current tablink class */\r\n.tab button.active {\r\n  background-color: #ccc;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n#after{\r\n  display: none;\r\n}\r\n/* The Modal (background) */\r\n.modals {\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n/* Modal Content */\r\n.modal-contents {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 500px;\r\n  clear: both;\r\n}\r\n/* The Close Button */\r\n.closes {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n.closes:hover,\r\n.closes:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.space{\r\n  margin-left: 3px;\r\n}\r\n#myImg {\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n#myImg:hover {opacity: 0.7;}\r\n/* The Modal (background) */\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n}\r\n/* Modal Content (image) */\r\n.modal-content {\r\n  margin: auto;\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 500px;\r\n}\r\n/* Caption of Modal Image */\r\n#caption {\r\n  margin: auto;\r\n  display: block;\r\n  width: 80%;\r\n  max-width: 700px;\r\n  text-align: center;\r\n  color: #ccc;\r\n  padding: 10px 0;\r\n  height: 150px;\r\n}\r\n/* Add Animation */\r\n.modal-content, #caption {\r\n  -webkit-animation-name: zoom;\r\n  -webkit-animation-duration: 0.6s;\r\n  animation-name: zoom;\r\n  animation-duration: 0.6s;\r\n}\r\n@-webkit-keyframes zoom {\r\n  from {-webkit-transform:scale(0)}\r\n  to {-webkit-transform:scale(1)}\r\n}\r\n@keyframes zoom {\r\n  from {-webkit-transform:scale(0);transform:scale(0)}\r\n  to {-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n/* The Close Button */\r\n.close {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 35px;\r\n  color: #f1f1f1;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  transition: 0.3s;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #bbb;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n/* 100% Image Width on Smaller Screens */\r\n@media only screen and (max-width: 700px){\r\n  .modal-content {\r\n    width: 100%;\r\n  }\r\n}\r\nbutton.like{\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  color: rgba(0,150,136 ,1);\r\n  background-color:rgba(38,166,154 ,0.3);\r\n  border-color: rgba(0,150,136 ,1);\r\n  border-width: 1px;\r\n  font-size: 15px;\r\n}\r\nbutton.dislike{\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  color: rgba(255,82,82 ,1);\r\n  background-color: rgba(255,138,128 ,0.3);\r\n  border-color: rgba(255,82,82 ,1);\r\n  border-width: 1px;\r\n  font-size: 15px;\r\n}\r\n#success{\r\n  display: none;\r\n}\r\n#form{\r\n  margin-left: 30%;\r\n  margin-right: auto;\r\n  width: 100%\r\n}\r\n.label-viewInfo{\r\n  margin: 2px 0;\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 140px;\r\n  text-align: right;\r\n}\r\n.input-viewInfo {\r\n  text-align: left;\r\n  width: 200px;\r\n}\r\n.form-viewInfo {\r\n  width: 100%;\r\n  padding: 30px;\r\n}\r\n.form-center{\r\n  display: table-cell;\r\n}\r\n.saveChangesButton{\r\n  margin-left: 50%\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"/> -->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<br>\r\n<div class=\"tab\">\r\n  <button class=\"tablinks\" onclick=\"openTab(event, 'Newest')\">Newest</button>\r\n  <button class=\"tablinks\" onclick=\"openTab(event, 'MostP')\">Most Popular</button>\r\n  <button class=\"tablinks\" onclick=\"openTab(event, 'MostV')\">Most Viewed</button>\r\n</div>\r\n<h1>Newest Memes</h1>\r\n<!-- The Modal -->\r\n<div class=\"space\">\r\n  <cl-image (click)=\"openMeme($event)\" id=\"myImg\" *ngFor=\"let pic of pics\"\r\n            public-id= \"{{ pic }}\"\r\n            type=\"fetch\">\r\n    <cl-transformation\r\n      width=\"300\" height=\"300\" gravity=\"face\" crop=\"fill\" fetch-format=\"auto\">\r\n    </cl-transformation>\r\n  </cl-image>\r\n</div>\r\n<div id=\"myModal\" class=\"modal\">\r\n  <span (click)=\"closeMeme($event)\" class=\"close\">&times;</span>\r\n  <img [src]=\"url\" class=\"modal-content\" id=\"img01\">\r\n  <div id=\"caption\">\r\n    <input type=\"text\" value=\"Comments\" placeholder=\"Comment\">\r\n    <br>\r\n    <br>\r\n    <button class=\"dislike\">\r\n      <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\"></i>\r\n    </button>\r\n    <button class=\"like\">\r\n      <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\r\n    </button>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<input type=\"file\" (change)=\"onFileSelected($event)\">\r\n<br>\r\n<br>\r\n<button type=\"button\" (click)=\"onUpload($event)\">Upload</button>\r\n<br>\r\n<br>\r\n<div id=\"after\" (change)=\"onFileSelected($event)\">\r\n  <div id=\"myModals\" class=\"modals\">\r\n    <div class=\"modal-contents\">\r\n      <form class=\"form-viewInfo\">\r\n        <section class=\"form-center\">\r\n          <div class=\"form-group\">\r\n            <label class=\"label-viewInfo\" for=\"title\"> <b>Title:</b></label>\r\n            <input class=\"input-viewInfo\" type=\"text\" id=\"title\" name=\"title\" required><br>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"label-viewInfo\" for=\"captions\"> <b>Caption:</b></label>\r\n            <input class=\"input-viewInfo\" type=\"text\" id=\"captions\" name=\"captions\" required><br>\r\n          </div>\r\n          <br>\r\n          <input class=\"saveChangesButton\" type=\"submit\" value=\"Save Changes\" (click)=\"saveChanges($event)\">\r\n        </section>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"success\" class=\"alert alert-success\">\r\n  <strong>Success!</strong> Your submission was successful, and is now under review. Thank you\r\n</div>\r\n<script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(http) {
        this.http = http;
        this.title = 'memeapp';
        this.url = new String('https://res.cloudinary.com/memecloud/image/fetch/https://res.cloudinary.com/memecloud/image/upload/v1541178452/');
        this.pics = [this.url.concat('test/tmry7yys3f3w6tyzxj6a.png'), this.url.concat('test/nsdk5rlwelowxvocycdx.png'), this.url.concat('test/vqefmdlwgrxrpgbo3u2l.gif'),
            this.url.concat('test/efeh0npwyekchwhjcgbs.png'), this.url.concat('test/ij5qk3hbobgjwno45gxo.gif'), this.url.concat('test/sd0nlkeyqfvglrfogrhs'),
            this.url.concat('test/tgi3c18mm5tp9e03pm48.png'), this.url.concat('test/remokdpfydqh9ronf0gd.png'), this.url.concat('test/tr6ov0wld5tjcolkkaio.jpg')];
        this.CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/memecloud/upload/';
        this.CLOUDINARY_UPLOAD_PRESET = 'mybmtjtx';
        this.selectedFile = null;
    }
    ;
    AppComponent.prototype.openMeme = function (event) {
        event.preventDefault();
        document.getElementById('myModal').style.display = "block";
        this.url = event.srcElement.currentSrc;
        document.getElementById("caption").style.display = "block";
    };
    AppComponent.prototype.closeMeme = function (event) {
        event.preventDefault();
        document.getElementsByClassName("close")[0];
        document.getElementById('myModal').style.display = "none";
    };
    AppComponent.prototype.onFileSelected = function (event) {
        event.preventDefault();
        this.selectedFile = event.target.files[0];
        if (this.selectedFile != null) {
            document.getElementById("after").style.display = "block";
        }
    };
    AppComponent.prototype.saveChanges = function (event) {
        event.preventDefault();
        console.log(document.getElementById('title').value); //this is what I need to send back to the database (title)
        console.log(document.getElementById('captions').value); //this is what I need to send back to the database (caption)
        document.getElementById("after").style.display = "none";
        this.onUpload(event);
    };
    AppComponent.prototype.onUpload = function (event) {
        event.preventDefault();
        var fd = new FormData();
        console.log(document.getElementById('title').value + "1"); //this is what I need to send back to the database (title)
        console.log(document.getElementById('captions').value + "1"); //this is what I need to send back to the database (caption)
        fd.append('file', this.selectedFile);
        fd.append('upload_preset', 'mybmtjtx');
        fd.append('folder', 'test');
        axios__WEBPACK_IMPORTED_MODULE_2___default()({
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
        }).catch(function (err) {
            console.log(err);
        });
    };
    ;
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AppComponent);
    return AppComponent;
}());

function imageSaver(event, res) {
    console.log("got to image saver");
    fetch('http://localhost:8080/post-api/post', {
        method: 'POST',
        // headers: {
        //     'Authorization': 'Bearer ' + localStorage.getItem('profile')
        // },
        body: JSON.stringify({
            // userId: localStorage.getItem('userId'),
            title: document.getElementById('title').value,
            caption: document.getElementById('captions').value,
            url: res.data.public_id
        })
    }).then(function (res) {
        if (res.ok) {
            return res.json();
        }
        else {
            if (res.status == 401 || res.status == 400) {
                throw {};
            }
        }
    }).catch(function (error) {
    });
}


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @cloudinary/angular-5.x */ "./node_modules/@cloudinary/angular-5.x/index.js");
/* harmony import */ var _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cloudinary-core */ "./node_modules/cloudinary-core/cloudinary-core.js");
/* harmony import */ var cloudinary_core__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cloudinary_core__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _cloudinary_angular_5_x__WEBPACK_IMPORTED_MODULE_3__["CloudinaryModule"].forRoot(cloudinary_core__WEBPACK_IMPORTED_MODULE_4__, { cloud_name: 'memecloud' })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Revature-Project2.1\revature-project2\meme\angmeme\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map