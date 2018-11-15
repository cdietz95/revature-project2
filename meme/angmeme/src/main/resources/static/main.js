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

module.exports = "/* Style the tab */\r\n.tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #f1f1f1;\r\n  width: 23.2%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\nbody{\r\n  background-color: lightgrey;\r\n}\r\nh1{\r\n  overflow: auto;\r\n  text-align: center;\r\n  justify-content: center;\r\n  text-justify: distribute;\r\n  padding: 20px;\r\n  width: 100%;\r\n  font-size: 110pt;\r\n  color: transparent;\r\n  background: cornflowerblue;\r\n  -webkit-background-clip: text;\r\n  text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n}\r\nh1:hover{\r\n  cursor: pointer;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  background-color: inherit;\r\n  float: left;\r\n  border: 1px solid #ccc;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color: #ddd;\r\n}\r\n/* Create an active/current tablink class */\r\n.tab button.active {\r\n  background-color: #ccc;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n#after{\r\n  display: none;\r\n}\r\n/* The Modal (background) */\r\n.modals {\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n/* Modal Content */\r\n.modal-contents {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 500px;\r\n  clear: both;\r\n}\r\n/* The Close Button */\r\n.closes {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n.closes:hover,\r\n.closes:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.space{\r\n  margin-left: 3px;\r\n}\r\n#myImg {\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n#myImg:hover {opacity: 0.7;}\r\n/* The Modal (background) */\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n}\r\n/* Modal Content (image) */\r\n.modal-content {\r\n  margin: auto;\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 500px;\r\n}\r\n/* Caption of Modal Image */\r\n#caption {\r\n  margin: auto;\r\n  display: block;\r\n  width: 80%;\r\n  max-width: 700px;\r\n  text-align: center;\r\n  color: #ccc;\r\n  padding: 10px 0;\r\n  height: 150px;\r\n}\r\n/* Add Animation */\r\n.modal-content, #caption {\r\n  -webkit-animation-name: zoom;\r\n  -webkit-animation-duration: 0.6s;\r\n  animation-name: zoom;\r\n  animation-duration: 0.6s;\r\n}\r\n@-webkit-keyframes zoom {\r\n  from {-webkit-transform:scale(0)}\r\n  to {-webkit-transform:scale(1)}\r\n}\r\n@keyframes zoom {\r\n  from {-webkit-transform:scale(0);transform:scale(0)}\r\n  to {-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n/* The Close Button */\r\n.close {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 35px;\r\n  color: #f1f1f1;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  transition: 0.3s;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #bbb;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n/* 100% Image Width on Smaller Screens */\r\n@media only screen and (max-width: 700px){\r\n  .modal-content {\r\n    width: 100%;\r\n  }\r\n}\r\nbutton.like{\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  color: rgba(0,150,136 ,1);\r\n  background-color:rgba(38,166,154 ,0.3);\r\n  border-color: rgba(0,150,136 ,1);\r\n  border-width: 1px;\r\n  font-size: 15px;\r\n}\r\nbutton.dislike{\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  color: rgba(255,82,82 ,1);\r\n  background-color: rgba(255,138,128 ,0.3);\r\n  border-color: rgba(255,82,82 ,1);\r\n  border-width: 1px;\r\n  font-size: 15px;\r\n}\r\n#success{\r\n  display: none;\r\n}\r\n#form{\r\n  margin-left: 30%;\r\n  margin-right: auto;\r\n  width: 100%\r\n}\r\n.label-viewInfo{\r\n  margin: 2px 0;\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 140px;\r\n  text-align: right;\r\n}\r\n.input-viewInfo {\r\n  text-align: left;\r\n  width: 200px;\r\n}\r\n.form-viewInfo {\r\n  width: 100%;\r\n  padding: 30px;\r\n}\r\n.form-center{\r\n  display: table-cell;\r\n}\r\n.saveChangesButton{\r\n  margin-left: 50%\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\"/> -->\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<br>\r\n<app-banner></app-banner>\r\n  <app-login *ngIf=\"!isLogin && !isMine\"></app-login>\r\n<app-images *ngIf=\"isLogin && !isMine\"></app-images>\r\n<app-update *ngIf=\"isLogin && isMine\"></app-update>\r\n<script src=\"https://unpkg.com/axios/dist/axios.min.js\"></script>\r\n"

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
    function AppComponent(ngZone, elementRef) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.isLogin = AppComponent_1.login;
        this.isMine = AppComponent_1.mine;
    }
    AppComponent_1 = AppComponent;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (localStorage.getItem('profile')) {
            this.ngZone.run(function () {
                AppComponent_1.login = true;
                _this.isLogin = true;
            });
        }
        if (localStorage.getItem('isMine').valueOf() == 'true') {
            console.log("is mine is true");
            this.isMine = true;
        }
        else if (localStorage.getItem('isMine').valueOf() == 'false') {
            this.isMine = false;
            console.log("is mine is false");
        }
    };
    AppComponent.prototype.update = function () {
        this.ngOnInit();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'lightgray';
    };
    var AppComponent_1;
    AppComponent.login = false;
    AppComponent = AppComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _images_images_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/images.component */ "./src/app/images/images.component.ts");
/* harmony import */ var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update/update.component */ "./src/app/update/update.component.ts");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./banner/banner.component */ "./src/app/banner/banner.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _images_images_component__WEBPACK_IMPORTED_MODULE_7__["ImagesComponent"],
                _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"],
                _banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"]
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

/***/ "./src/app/banner/banner.component.css":
/*!*********************************************!*\
  !*** ./src/app/banner/banner.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1{\r\n  overflow: auto;\r\n  text-align: center;\r\n  justify-content: center;\r\n  text-justify: distribute;\r\n  padding: 20px;\r\n  width: 100%;\r\n  font-size: 110pt;\r\n  color: transparent;\r\n  background: cornflowerblue;\r\n  -webkit-background-clip: text;\r\n  text-shadow: 0px 3px 3px rgba(255,255,255,0.5);\r\n}\r\nh1:hover{\r\n  cursor: pointer;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.html":
/*!**********************************************!*\
  !*** ./src/app/banner/banner.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"wrapper\" (click)=\"home($event)\">\r\n\r\n  <h1 class=\"header\" >\r\n    <strong>Reddette</strong>\r\n  </h1>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/banner/banner.component.ts":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BannerComponent = /** @class */ (function () {
    function BannerComponent(ngZone) {
        this.ngZone = ngZone;
    }
    BannerComponent.prototype.ngOnInit = function () {
    };
    BannerComponent.prototype.home = function (event) {
        this.ngZone.run(function () {
            console.log("banner clicked");
            localStorage.setItem('isMine', 'false');
            location.href = "http://localhost:4200";
        });
    };
    BannerComponent.clicked = true;
    BannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-banner',
            template: __webpack_require__(/*! ./banner.component.html */ "./src/app/banner/banner.component.html"),
            styles: [__webpack_require__(/*! ./banner.component.css */ "./src/app/banner/banner.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], BannerComponent);
    return BannerComponent;
}());



/***/ }),

/***/ "./src/app/images/images.component.css":
/*!*********************************************!*\
  !*** ./src/app/images/images.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the tab */\r\n.tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #f1f1f1;\r\n  width: 23.2%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  background-color: inherit;\r\n  float: left;\r\n  border: 1px solid #ccc;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color: #ddd;\r\n}\r\n/* Create an active/current tablink class */\r\n.tab button.active {\r\n  background-color: #ccc;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n#after{\r\n  display: none;\r\n}\r\n/* The Modal (background) */\r\n.modals {\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n/* Modal Content */\r\n.modal-contents {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 500px;\r\n  clear: both;\r\n}\r\n/* The Close Button */\r\n.closes {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n.closes:hover,\r\n.closes:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.space{\r\n  margin-left: 3px;\r\n}\r\n#myImg {\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n#myImg:hover {opacity: 0.7;}\r\n/* The Modal (background) */\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n}\r\n/* Modal Content (image) */\r\n.modal-content {\r\n  margin: auto;\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 500px;\r\n}\r\n/* Caption of Modal Image */\r\n#caption {\r\n  margin: auto;\r\n  display: block;\r\n  width: 80%;\r\n  max-width: 700px;\r\n  text-align: center;\r\n  color: #ccc;\r\n  padding: 10px 0;\r\n  height: 150px;\r\n}\r\n/* Add Animation */\r\n.modal-content, #caption {\r\n  -webkit-animation-name: zoom;\r\n  -webkit-animation-duration: 0.6s;\r\n  animation-name: zoom;\r\n  animation-duration: 0.6s;\r\n}\r\n@-webkit-keyframes zoom {\r\n  from {-webkit-transform:scale(0)}\r\n  to {-webkit-transform:scale(1)}\r\n}\r\n@keyframes zoom {\r\n  from {-webkit-transform:scale(0);transform:scale(0)}\r\n  to {-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n/* The Close Button */\r\n.close {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 35px;\r\n  color: #f1f1f1;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  transition: 0.3s;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #bbb;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n/* 100% Image Width on Smaller Screens */\r\n@media only screen and (max-width: 700px){\r\n  .modal-content {\r\n    width: 100%;\r\n  }\r\n}\r\nbutton.like{\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  color: rgba(0,150,136 ,1);\r\n  background-color:rgba(38,166,154 ,0.3);\r\n  border-color: rgba(0,150,136 ,1);\r\n  border-width: 1px;\r\n  font-size: 15px;\r\n}\r\nbutton.dislike{\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  color: rgba(255,82,82 ,1);\r\n  background-color: rgba(255,138,128 ,0.3);\r\n  border-color: rgba(255,82,82 ,1);\r\n  border-width: 1px;\r\n  font-size: 15px;\r\n}\r\n#success{\r\n  display: none;\r\n}\r\n#form{\r\n  margin-left: 30%;\r\n  margin-right: auto;\r\n  width: 100%\r\n}\r\n.label-viewInfo{\r\n  margin: 2px 0;\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 140px;\r\n  text-align: right;\r\n}\r\n.input-viewInfo {\r\n  text-align: left;\r\n  width: 200px;\r\n}\r\n.form-viewInfo {\r\n  width: 100%;\r\n  padding: 30px;\r\n}\r\n.form-center{\r\n  display: table-cell;\r\n}\r\n.saveChangesButton{\r\n  margin-left: 50%\r\n}\r\n"

/***/ }),

/***/ "./src/app/images/images.component.html":
/*!**********************************************!*\
  !*** ./src/app/images/images.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\r\n<div class=\"tab\">\r\n  <button class=\"tablinks\" (click)=\"openNewest($event)\">Newest</button>\r\n  <button class=\"tablinks\" (click)=\"openPop($event)\">Most Popular</button>\r\n  <button class=\"tablinks\" (click)=\"openLeastPop($event)\">Least Popular</button>\r\n  <button class=\"tablinks\" (click)=\"openTab($event)\">My Memes</button>\r\n</div>\r\n<h1>Newest Memes</h1>\r\n  <!-- The Modal -->\r\n  <div class=\"space\" *ngFor='let p of post'>\r\n    <div id=\"head\"><h3 id=\"imgTitle\">{{ p.title }}</h3>\r\n      <br>\r\n      <p id=\"imgCaption\">{{ p.caption }}</p>\r\n    </div>\r\n    <cl-image (click)=\"openMeme($event)\" id=\"myImg\"\r\n              public-id= \"{{ p.url }}\"\r\n              type=\"fetch\">\r\n    </cl-image>\r\n  </div>\r\n\r\n<div id=\"myModal\" class=\"modal\">\r\n    <span (click)=\"closeMeme($event)\" class=\"close\">&times;</span>\r\n\r\n  <img [src]=\"url\" class=\"modal-content\" id=\"img01\">\r\n  <div id=\"caption\">\r\n\r\n    <button class=\"dislike\">\r\n      <i class=\"fa fa-thumbs-o-down\" aria-hidden=\"true\" (click)=\"thumbs($event, 0)\"></i>\r\n    </button>\r\n    <!--<span>{{thmbsDown}}</span>-->\r\n    <button class=\"like\">\r\n      <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\" (click)=\"thumbs($event, 1)\"></i>\r\n    </button>\r\n    <!--<span>{{thmbsUp}}</span>-->\r\n\r\n    <div class=\"media\">\r\n      <div class=\"media-left\">\r\n      </div>\r\n      <br>\r\n      <div class=\"media-body\" *ngFor='let c of comments'>\r\n        <br>\r\n        <div>\r\n        <h4 id=\"commentUserName\" class=\"media-heading\">{{c.userID.username}}</h4>\r\n        <br>\r\n      <p id=\"commentContent\">{{c.content}}</p>\r\n        </div>\r\n        <br>\r\n      </div>\r\n      <br>\r\n      <br>\r\n      <input type=\"text\" value=\"\" id=\"commentBox\" placeholder=\"Comment\">\r\n      <button type=\"submit\"id=\"comment-submit\" (click)=\"comment($event)\">Comment</button>\r\n      <br>\r\n    </div>\r\n    <br>\r\n    <br>\r\n  </div>\r\n</div>\r\n<br>\r\n<br>\r\n<input type=\"file\" (change)=\"onFileSelected($event)\">\r\n<br>\r\n<br>\r\n<div id=\"after\" (change)=\"onFileSelected($event)\">\r\n  <div id=\"myModals\" class=\"modals\">\r\n    <div class=\"modal-contents\">\r\n      <form class=\"form-viewInfo\">\r\n        <section class=\"form-center\">\r\n          <div class=\"form-group\">\r\n            <label class=\"label-viewInfo\" for=\"title\"> <b>Title:</b></label>\r\n            <input class=\"input-viewInfo\" type=\"text\" id=\"title\" name=\"title\" required><br>\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label class=\"label-viewInfo\" for=\"captions\"> <b>Caption:</b></label>\r\n            <input class=\"input-viewInfo\" type=\"text\" id=\"captions\" name=\"captions\" required><br>\r\n          </div>\r\n          <br>\r\n          <input class=\"saveChangesButton\" type=\"submit\" value=\"Save Changes\" (click)=\"saveChanges($event)\">\r\n        </section>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"success\" class=\"alert alert-success\">\r\n  <strong>Success!</strong> Your submission was successful, and is now under review. Thank you\r\n</div>\r\n<div>\r\n  <button id=\"logout\" (click)=\"logout($event)\">Logout</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/images/images.component.ts":
/*!********************************************!*\
  !*** ./src/app/images/images.component.ts ***!
  \********************************************/
/*! exports provided: ImagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagesComponent", function() { return ImagesComponent; });
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



var ImagesComponent = /** @class */ (function () {
    function ImagesComponent(http, ngZone) {
        this.http = http;
        this.ngZone = ngZone;
        this.title = 'memeapp';
        this.url = new String('https://res.cloudinary.com/memecloud/image/fetch/https://res.cloudinary.com/memecloud/image/upload/v1541178452/');
        this.pics = [];
        this.postVar = localStorage.getItem('postVar');
        this.comapreVar = localStorage.getItem('compareVar');
        this.CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/memecloud/upload/';
        this.CLOUDINARY_UPLOAD_PRESET = 'mybmtjtx';
        this.selectedFile = null;
    }
    ImagesComponent_1 = ImagesComponent;
    ImagesComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch('http://localhost:8080/post-api', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (res) {
            if (res.ok) {
                return res.json();
            }
            else {
                if (res.status == 401 || res.status == 400) {
                    throw {};
                }
            }
        }).then(function (val) {
            console.log(val);
            _this.post = val;
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var v = val_1[_i];
                _this.pics.push(v.url);
            }
        }).catch(function (error) {
        });
        localStorage.setItem('postVar', 'p');
        localStorage.setItem('comapreVar', 'p');
    };
    ;
    ImagesComponent.prototype.openMeme = function (event) {
        var _this = this;
        event.preventDefault();
        var content = 0;
        console.log(event.srcElement.currentSrc);
        var fullUrl = event.srcElement.currentSrc;
        var splitUrl = fullUrl.split("fetch/");
        document.getElementById('myModal').style.display = "block";
        this.url = event.srcElement.currentSrc;
        console.log(splitUrl[1].concat("fetch/").concat(splitUrl[2]));
        document.getElementById("caption").style.display = "block";
        fetch('http://localhost:8080/comment-api/{c}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + localStorage.getItem('profile')
            },
            body: JSON.stringify({
                postId: splitUrl[1].concat("fetch/").concat(splitUrl[2])
            })
        }).then(function (res) {
            console.log(res);
            if (res.ok) {
                return res.json();
            }
            else {
                if (res.status == 401 || res.status == 400) {
                    throw {};
                }
            }
        }).then(function (val) {
            console.log(val);
            _this.comments = val;
        }).catch(function (error) {
        });
    };
    ImagesComponent.prototype.comment = function (event) {
        //event.srcElement.currentSrc;
        //its fine
        // @ts-ignore
        var fullUrl = document.getElementById('img01').src;
        var splitUrl = fullUrl.split("fetch/");
        fetch('http://localhost:8080/comment-api/comment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + localStorage.getItem('profile')
            },
            body: JSON.stringify({
                content: document.getElementById('commentBox').value,
                userID: localStorage.getItem('userId'),
                postId: splitUrl[1].concat("fetch/").concat(splitUrl[2])
            })
        }).then(function (res) {
            console.log(res);
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
    };
    ImagesComponent.prototype.closeMeme = function (event) {
        event.preventDefault();
        document.getElementsByClassName("close")[0];
        document.getElementById('myModal').style.display = "none";
    };
    ImagesComponent.prototype.openTab = function (event) {
        this.ngZone.run(function () {
            console.log('Meme Clicked');
            console.log(ImagesComponent_1.clicked);
            localStorage.setItem('isMine', 'true');
            location.href = "http://localhost:4200";
        });
    };
    ImagesComponent.prototype.openNewest = function (event) {
        for (var i = 0; i < this.post.length; i++) {
            for (var j = 0; j < this.post.length - 1; j++) {
                if (this.post[j].createDateTime < this.post[j + 1].createDateTime) {
                    var swap = this.post[j];
                    this.post[j] = this.post[j + 1];
                    this.post[j + 1] = swap;
                }
            }
        }
    };
    ImagesComponent.prototype.openPop = function (event) {
        this.ngZone.run(function () {
            localStorage.setItem('postVar', 'p.vote');
            localStorage.setItem('comapreVar', '0');
            location.href = "http://localhost:4200";
        });
        var upVote = [];
        console.log(this.x);
        for (var i = 0; i < this.post.length; i++) {
            this.ThmbCnt(1, this.post[i].url);
            console.log(this.x);
            upVote.push(this.x);
        }
    };
    ImagesComponent.prototype.openLeastPop = function (event) {
    };
    ImagesComponent.prototype.openMostViewed = function (event) {
    };
    ImagesComponent.prototype.logout = function (event) {
        event.preventDefault();
        localStorage.removeItem('profile');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        location.href = "http://localhost:4200";
    };
    ImagesComponent.prototype.onFileSelected = function (event) {
        event.preventDefault();
        this.selectedFile = event.target.files[0];
        if (this.selectedFile != null) {
            document.getElementById("after").style.display = "block";
        }
    };
    ImagesComponent.prototype.saveChanges = function (event) {
        event.preventDefault();
        console.log(document.getElementById('title').value); //this is what I need to send back to the database (title)
        console.log(document.getElementById('captions').value); //this is what I need to send back to the database (caption)
        document.getElementById("after").style.display = "none";
        this.onUpload(event);
    };
    ImagesComponent.prototype.thumbs = function (event, thmbType) {
        var _this = this;
        // @ts-ignore
        var fullUrl = document.getElementById('img01').src;
        var splitUrl = fullUrl.split('fetch/');
        var sendUrl = splitUrl[1].concat("fetch/").concat(splitUrl[2]);
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
        }).then(function (res) {
            if (res.ok) {
                switch (thmbType) {
                    case 0:
                        _this.ThmbCnt(thmbType, sendUrl);
                        break;
                    case 1:
                        _this.ThmbCnt(thmbType, sendUrl);
                        break;
                }
                return res.json();
            }
            else {
                if (res.status == 401 || res.status == 400) {
                    throw {};
                }
            }
        }).catch(function (error) {
        });
    };
    ImagesComponent.prototype.ThmbCnt = function (thmbType, sendURL) {
        var _this = this;
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
        }).then(function (res) {
            if (res.ok) {
                console.log("this is the resp from dwnthmbcnt " + res);
                return res.json();
            }
            else {
                if (res.status == 401 || res.status == 400) {
                    throw {};
                }
            }
        }).then(function (val) {
            _this.x = val;
        }).catch(function (error) {
        });
    };
    ImagesComponent.prototype.onUpload = function (event) {
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
    var ImagesComponent_1;
    ImagesComponent.clicked = true;
    ImagesComponent = ImagesComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-images',
            template: __webpack_require__(/*! ./images.component.html */ "./src/app/images/images.component.html"),
            styles: [__webpack_require__(/*! ./images.component.css */ "./src/app/images/images.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], ImagesComponent);
    return ImagesComponent;
}());

function imageSaver(event, res) {
    var url = 'https://res.cloudinary.com/memecloud/image/fetch/https://res.cloudinary.com/memecloud/image/upload/v1541178452/';
    console.log("got to image saver");
    console.log(url);
    fetch('http://localhost:8080/post-api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer ' + localStorage.getItem('profile')
        },
        body: JSON.stringify({
            author: localStorage.getItem('userId'),
            title: document.getElementById('title').value,
            caption: document.getElementById('captions').value,
            url: url.concat(res.data.public_id)
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

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#createLoginWrapper{\r\n  display: none;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section  id=\"loginWrapper\" ng-show=\"noLogin\">\r\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\r\n  <form action=\"form\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"uname1\">Username:</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"uname1\" placeholder=\"Enter username\" name=\"email\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"pwd\">Password:</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"password\" class=\"form-control\" id=\"pwd\" placeholder=\"Enter password\" name=\"pwd\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <div class=\"checkbox\">\r\n          <label><input type=\"checkbox\" name=\"remember\"> Remember me</label>&nbsp;&nbsp;\r\n          <label><input type=\"checkbox\" name=\"noLogin\" (click)=\"noLogin()\">Don't have a Login?</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <button type=\"submit\" class=\"btn btn-default\" id=\"login-submit\" (click)=\"onLogin($event)\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>\r\n<section id=\"createLoginWrapper\">\r\n  <!--TODO should we make this it's own web component? used in a couple different places-->\r\n  <p>Please fill out all of the following fields:</p>\r\n  <form action=\"form1\" class=\"form-horizontal\">\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"fName\">First Name:</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"fName\" placeholder=\"Enter First Name\" name=\"firstName\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"lName\">Last Name:</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"lName\" placeholder=\"Enter Last Name\" name=\"lastName\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"email1\">Email:</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"email\" class=\"form-control\" id=\"email1\" placeholder=\"Enter email\" name=\"email\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"uName\">Username:</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"text\" class=\"form-control\" id=\"uName\" placeholder=\"Enter username\" name=\"username\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label class=\"control-label col-sm-2\" for=\"password\">Password:</label>\r\n      <div class=\"col-sm-10\">\r\n        <input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter password\" name=\"password\">\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <div class=\"checkbox\">\r\n          <!--<label><input type=\"checkbox\" name=\"remember\"> Remember me</label>&nbsp;&nbsp;-->\r\n          <label><input type=\"checkbox\" name=\"haveLogin\" (click)=\"haveLogin()\">I have a login actually</label>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <div class=\"col-sm-offset-2 col-sm-10\">\r\n        <button type=\"submit\" class=\"btn btn-default\" (click)=\"onCreate($event)\">Submit</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</section>\r\n<div>\r\n  <button id=\"logout\" (click)=\"logout($event)\">Logout</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent(ngZone) {
        this.ngZone = ngZone;
        this.noLogin = function () {
            document.getElementById("loginWrapper").style.display = 'none';
            document.getElementById("createLoginWrapper").style.display = 'block';
            // document.getElementById('noLogin').checked = false
        };
        this.haveLogin = function () {
            document.getElementById("loginWrapper").style.display = 'block';
            document.getElementById("createLoginWrapper").style.display = 'none';
            // document.getElementById('haveLogin').checked = false
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logout = function (event) {
        event.preventDefault();
        localStorage.removeItem('profile');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        location.href = "http://localhost:4200";
    };
    LoginComponent.prototype.onLogin = function (event) {
        event.preventDefault();
        fetch('http://localhost:8080/user-api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + localStorage.getItem('profile')
            },
            body: JSON.stringify({
                username: document.getElementById('uname1').value,
                password: document.getElementById('pwd').value
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
        }).then(function (token) {
            localStorage.setItem('profile', token.idToken);
            localStorage.setItem('username', token.userName);
            localStorage.setItem('userId', token.userId);
            location.href = "http://localhost:4200";
        }).catch(function (error) {
        });
    };
    LoginComponent.prototype.onCreate = function (event) {
        event.preventDefault();
        fetch('http://localhost:8080/user-api/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + localStorage.getItem('profile')
            },
            body: JSON.stringify({
                username: document.getElementById('uName').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email1').value,
                firstName: document.getElementById('fName').value,
                lastName: document.getElementById('lName').value,
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
        }).then(function (token) {
            localStorage.setItem('profile', token.idToken);
            localStorage.setItem('username', token.userName);
            localStorage.setItem('userId', token.userId);
            location.href = "http://localhost:4200";
        }).catch(function (error) {
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/update/update.component.css":
/*!*********************************************!*\
  !*** ./src/app/update/update.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Style the tab */\r\n.tab {\r\n  overflow: hidden;\r\n  border: 1px solid #ccc;\r\n  background-color: #f1f1f1;\r\n  width: 23.2%;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/* Style the buttons inside the tab */\r\n.tab button {\r\n  background-color: inherit;\r\n  float: left;\r\n  border: 1px solid #ccc;\r\n  outline: none;\r\n  cursor: pointer;\r\n  padding: 14px 16px;\r\n  transition: 0.3s;\r\n  font-size: 17px;\r\n}\r\n/* Change background color of buttons on hover */\r\n.tab button:hover {\r\n  background-color: #ddd;\r\n}\r\n/* Create an active/current tablink class */\r\n.tab button.active {\r\n  background-color: #ccc;\r\n}\r\nbody {\r\n  font-family: Arial, Helvetica, sans-serif;\r\n}\r\n#after{\r\n  display: none;\r\n}\r\n/* The Modal (background) */\r\n.modals {\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\r\n}\r\n/* Modal Content */\r\n.modal-contents {\r\n  background-color: #fefefe;\r\n  margin: auto;\r\n  padding: 20px;\r\n  border: 1px solid #888;\r\n  width: 500px;\r\n  clear: both;\r\n}\r\n/* The Close Button */\r\n.closes {\r\n  color: #aaaaaa;\r\n  float: right;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n.closes:hover,\r\n.closes:focus {\r\n  color: #000;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n.space{\r\n  margin-left: 3px;\r\n}\r\n#myImg {\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n  transition: 0.3s;\r\n}\r\n#myImg:hover {opacity: 0.7;}\r\n/* The Modal (background) */\r\n.modal {\r\n  display: none; /* Hidden by default */\r\n  position: fixed; /* Stay in place */\r\n  z-index: 1; /* Sit on top */\r\n  padding-top: 100px; /* Location of the box */\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%; /* Full width */\r\n  height: 100%; /* Full height */\r\n  overflow: auto; /* Enable scroll if needed */\r\n  background-color: rgb(0,0,0); /* Fallback color */\r\n  background-color: rgba(0,0,0,0.9); /* Black w/ opacity */\r\n}\r\n/* Modal Content (image) */\r\n.modal-content {\r\n  margin: auto;\r\n  display: block;\r\n  width: 100%;\r\n  max-width: 500px;\r\n}\r\n/* Caption of Modal Image */\r\n#caption {\r\n  margin: auto;\r\n  display: block;\r\n  width: 80%;\r\n  max-width: 700px;\r\n  text-align: center;\r\n  color: #ccc;\r\n  padding: 10px 0;\r\n  height: 150px;\r\n}\r\n/* Add Animation */\r\n.modal-content, #caption {\r\n  -webkit-animation-name: zoom;\r\n  -webkit-animation-duration: 0.6s;\r\n  animation-name: zoom;\r\n  animation-duration: 0.6s;\r\n}\r\n@-webkit-keyframes zoom {\r\n  from {-webkit-transform:scale(0)}\r\n  to {-webkit-transform:scale(1)}\r\n}\r\n@keyframes zoom {\r\n  from {-webkit-transform:scale(0);transform:scale(0)}\r\n  to {-webkit-transform:scale(1);transform:scale(1)}\r\n}\r\n/* The Close Button */\r\n.close {\r\n  position: absolute;\r\n  top: 15px;\r\n  right: 35px;\r\n  color: #f1f1f1;\r\n  font-size: 40px;\r\n  font-weight: bold;\r\n  transition: 0.3s;\r\n}\r\n.close:hover,\r\n.close:focus {\r\n  color: #bbb;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n/* 100% Image Width on Smaller Screens */\r\n@media only screen and (max-width: 700px){\r\n  .modal-content {\r\n    width: 100%;\r\n  }\r\n}\r\nbutton.like{\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  color: rgba(0,150,136 ,1);\r\n  background-color:rgba(38,166,154 ,0.3);\r\n  border-color: rgba(0,150,136 ,1);\r\n  border-width: 1px;\r\n  font-size: 15px;\r\n}\r\nbutton.dislike{\r\n  width: 30px;\r\n  height: 30px;\r\n  margin: 0 auto;\r\n  border-radius: 50%;\r\n  color: rgba(255,82,82 ,1);\r\n  background-color: rgba(255,138,128 ,0.3);\r\n  border-color: rgba(255,82,82 ,1);\r\n  border-width: 1px;\r\n  font-size: 15px;\r\n}\r\n#success{\r\n  display: none;\r\n}\r\n#form{\r\n  margin-left: 30%;\r\n  margin-right: auto;\r\n  width: 100%\r\n}\r\n.label-viewInfo{\r\n  margin: 2px 0;\r\n  text-align: left;\r\n  display: inline-block;\r\n  width: 140px;\r\n  text-align: right;\r\n}\r\n.input-viewInfo {\r\n  text-align: left;\r\n  width: 200px;\r\n}\r\n.form-viewInfo {\r\n  width: 100%;\r\n  padding: 30px;\r\n}\r\n.form-center{\r\n  display: table-cell;\r\n}\r\n.saveChangesButton{\r\n  margin-left: 50%\r\n}\r\n"

/***/ }),

/***/ "./src/app/update/update.component.html":
/*!**********************************************!*\
  !*** ./src/app/update/update.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n\n<h1>My Memes</h1>\n<!-- The Modal -->\n<div class=\"space\" *ngFor='let p of post'>\n  <div *ngIf=\"(p.author.id == id)\">\n  <div id=\"head\"><h3 id=\"imgTitle\">{{ p.title }}</h3>\n    <br>\n    <p id=\"imgCaption\">{{ p.caption }}</p>\n  </div>\n  <cl-image (click)=\"openMeme($event)\" id=\"myImg\"\n            public-id= \"{{ p.url }}\"\n            type=\"fetch\">\n  </cl-image>\n  </div>\n</div>\n<div id=\"myModal\" class=\"modal\">\n  <span (click)=\"closeMeme($event)\" class=\"close\">&times;</span>\n\n  <img [src]=\"url\" class=\"modal-content\" id=\"img01\">\n  <div id=\"caption\">\n    <form action=\"form1\" class=\"form-horizontal\">\n      <p>Update Title and Caption:</p>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"newTitle\">Title:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"newTitle\" placeholder=\"New Title\" name=\"newTitle\">\n        </div>\n      </div>\n      <div class=\"form-group\">\n        <label class=\"control-label col-sm-2\" for=\"newCaption\">Caption:</label>\n        <div class=\"col-sm-10\">\n          <input type=\"text\" class=\"form-control\" id=\"newCaption\" placeholder=\"New Caption\" name=\"newCaption\">\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"col-sm-offset-2 col-sm-10\">\n          <button type=\"submit\" class=\"btn btn-default\" (click)=\"updatePost($event)\">Update</button>\n        </div>\n      </div>\n    </form>\n    </div>\n\n  </div>\n<br>\n<br>\n<input type=\"file\" (change)=\"onFileSelected($event)\">\n<br>\n<br>\n<div id=\"after\" (change)=\"onFileSelected($event)\">\n  <div id=\"myModals\" class=\"modals\">\n    <div class=\"modal-contents\">\n      <form class=\"form-viewInfo\">\n        <section class=\"form-center\">\n          <div class=\"form-group\">\n            <label class=\"label-viewInfo\" for=\"title\"> <b>Title:</b></label>\n            <input class=\"input-viewInfo\" type=\"text\" id=\"title\" name=\"title\" required><br>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"label-viewInfo\" for=\"captions\"> <b>Caption:</b></label>\n            <input class=\"input-viewInfo\" type=\"text\" id=\"captions\" name=\"captions\" required><br>\n          </div>\n          <br>\n          <input class=\"saveChangesButton\" type=\"submit\" value=\"Save Changes\" (click)=\"saveChanges($event)\">\n        </section>\n      </form>\n    </div>\n  </div>\n</div>\n<div id=\"success\" class=\"alert alert-success\">\n  <strong>Success!</strong> Your submission was successful, and is now under review. Thank you\n</div>\n<div>\n  <button id=\"logout\" (click)=\"logout($event)\">Logout</button>\n</div>\n"

/***/ }),

/***/ "./src/app/update/update.component.ts":
/*!********************************************!*\
  !*** ./src/app/update/update.component.ts ***!
  \********************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
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



var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(http, ngZone) {
        this.http = http;
        this.ngZone = ngZone;
        this.title = 'memeapp';
        this.url = new String('https://res.cloudinary.com/memecloud/image/fetch/https://res.cloudinary.com/memecloud/image/upload/v1541178452/');
        this.id = localStorage.getItem('userId');
        // pics = [this.url.concat('test/tmry7yys3f3w6tyzxj6a.png'), this.url.concat('test/nsdk5rlwelowxvocycdx.png'), this.url.concat('test/vqefmdlwgrxrpgbo3u2l.gif'),
        //   this.url.concat('test/efeh0npwyekchwhjcgbs.png'), this.url.concat('test/ij5qk3hbobgjwno45gxo.gif'), this.url.concat('test/sd0nlkeyqfvglrfogrhs'),
        //   this.url.concat('test/tgi3c18mm5tp9e03pm48.png'), this.url.concat('test/remokdpfydqh9ronf0gd.png'), this.url.concat('test/tr6ov0wld5tjcolkkaio.jpg')];
        this.CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/memecloud/upload/';
        this.CLOUDINARY_UPLOAD_PRESET = 'mybmtjtx';
        this.selectedFile = null;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        fetch('http://localhost:8080/post-api', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(function (res) {
            if (res.ok) {
                return res.json();
            }
            else {
                if (res.status == 401 || res.status == 400) {
                    throw {};
                }
            }
        }).then(function (val) {
            console.log(val);
            _this.post = val;
            for (var _i = 0, val_1 = val; _i < val_1.length; _i++) {
                var v = val_1[_i];
                _this.pics.push(v.url);
            }
        }).catch(function (error) {
        });
    };
    ;
    UpdateComponent.prototype.openMeme = function (event) {
        var _this = this;
        var fullUrl = event.srcElement.currentSrc;
        var splitUrl = fullUrl.split("fetch/");
        event.preventDefault();
        document.getElementById('myModal').style.display = "block";
        this.url = event.srcElement.currentSrc;
        console.log(splitUrl[1].concat("fetch/").concat(splitUrl[2]));
        document.getElementById("caption").style.display = "block";
        fetch('http://localhost:8080/comment-api/{c}', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + localStorage.getItem('profile')
            },
            body: JSON.stringify({
                postId: splitUrl[1].concat("fetch/").concat(splitUrl[2])
            })
        }).then(function (res) {
            console.log(res);
            if (res.ok) {
                return res.json();
            }
            else {
                if (res.status == 401 || res.status == 400) {
                    throw {};
                }
            }
        }).then(function (val) {
            console.log(val);
            _this.comments = val;
        }).catch(function (error) {
        });
    };
    UpdateComponent.prototype.updatePost = function (event) {
        event.preventDefault();
        // @ts-ignore
        var fullUrl = document.getElementById('img01').src;
        var splitUrl = fullUrl.split("fetch/");
        console.log(document.getElementById('newTitle').value);
        console.log(document.getElementById('newCaption').value);
        fetch('http://localhost:8080/post-api/post/{id}', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
                // 'Authorization': 'Bearer ' + localStorage.getItem('profile')
            },
            body: JSON.stringify({
                urlValue: splitUrl[1].concat("fetch/").concat(splitUrl[2]),
                id: localStorage.getItem('userId'),
                title: document.getElementById('newTitle').value,
                caption: document.getElementById('newCaption').value
            })
        }).then(function (res) {
            console.log(res);
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
    };
    UpdateComponent.prototype.closeMeme = function (event) {
        event.preventDefault();
        document.getElementsByClassName("close")[0];
        document.getElementById('myModal').style.display = "none";
    };
    UpdateComponent.prototype.logout = function (event) {
        event.preventDefault();
        localStorage.removeItem('profile');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        location.href = "http://localhost:4200";
    };
    UpdateComponent.prototype.onFileSelected = function (event) {
        event.preventDefault();
        this.selectedFile = event.target.files[0];
        if (this.selectedFile != null) {
            document.getElementById("after").style.display = "block";
        }
    };
    UpdateComponent.prototype.saveChanges = function (event) {
        event.preventDefault();
        console.log(document.getElementById('title').value); //this is what I need to send back to the database (title)
        console.log(document.getElementById('captions').value); //this is what I need to send back to the database (caption)
        document.getElementById("after").style.display = "none";
        this.onUpload(event);
    };
    UpdateComponent.prototype.thumbs = function (thmbType) {
        console.log("thumb type is " + thmbType);
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
    };
    UpdateComponent.prototype.onUpload = function (event) {
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
    UpdateComponent.clicked = false;
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]])
    ], UpdateComponent);
    return UpdateComponent;
}());

function imageSaver(event, res) {
    var url = 'https://res.cloudinary.com/memecloud/image/fetch/https://res.cloudinary.com/memecloud/image/upload/v1541178452/';
    console.log("got to image saver");
    console.log(url);
    fetch('http://localhost:8080/post-api/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
            // 'Authorization': 'Bearer ' + localStorage.getItem('profile')
        },
        body: JSON.stringify({
            author: localStorage.getItem('userId'),
            title: document.getElementById('title').value,
            caption: document.getElementById('captions').value,
            url: url.concat(res.data.public_id)
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