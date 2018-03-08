webpackJsonp([0],{

/***/ 111:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ask_ask__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_pageButton_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_webconfig_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_ajax_service__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var pageArr = [
    __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
    __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
    __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
    __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
    __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
    __WEBPACK_IMPORTED_MODULE_8__pages_ask_ask__["a" /* AskPage */]
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: pageArr.slice(),
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: pageArr.slice(),
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_11__services_pageButton_service__["a" /* PageButtonService */],
                __WEBPACK_IMPORTED_MODULE_12__services_webconfig_service__["a" /* webConfig */],
                __WEBPACK_IMPORTED_MODULE_13__services_ajax_service__["a" /* AjaxService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

var page = {
    MyApp: __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
    ContactPage: __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__["a" /* ContactPage */],
    HomePage: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
    TabsPage: __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
    LoginPage: __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
    AskPage: __WEBPACK_IMPORTED_MODULE_8__pages_ask_ask__["a" /* AskPage */]
};
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 153;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_webconfig_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(200);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TabsPage = (function () {
    function TabsPage(BackButtonService, platform, navCtrl, c, storage) {
        var _this = this;
        this.BackButtonService = BackButtonService;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.c = c;
        this.storage = storage;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__contact_contact__["a" /* ContactPage */];
        platform.ready().then(function () {
            _this.BackButtonService.registerBackButtonAction(_this.tabRef, navCtrl);
            storage.set('name', 'Max');
            console.log(storage);
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", Object)
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\vip\ionic\c\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="0" no-border #myTabs>\n  <ion-tab [root]="tab1Root" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="我的" tabIcon="contacts"></ion-tab>\n  <!--\n  .tab-button[aria-selected=false] .ion-md-myIcon-outline:before {\n    content: url("../assets/fonts/people.svg");\n}\n\n.tab-button[aria-selected=true] .ion-md-myIcon-outline:before {\n    content: url("../assets/fonts/people-fill.svg");\n}\n  -->\n</ion-tabs>\n'/*ion-inline-end:"E:\vip\ionic\c\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__["a" /* PageButtonService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_webconfig_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pageButton_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {App, NavController} from 'ionic-angular';


var ContactPage = (function () {
    function ContactPage(
        // public navCtrl: NavController,
        // public appCtrl: App,
        conf, pageService) {
        this.conf = conf;
        this.pageService = pageService;
    }
    ContactPage.prototype.ionViewWillEnter = function () {
        this.conf.user['login'] || this.pageService.goPage('LoginPage');
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\vip\ionic\c\src\pages\contact\contact.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title class="wulv-title-center">\n      综合评分\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    <img src="assets/imgs/icon.png">\n    无虑老师\n  </ion-list-header>\n  <ul padding-right padding-left>\n    <li (click)="goPage()" padding *ngFor="let item of conf.data.ksList.list">\n      <img float-start [src]="conf.data.ksList.url + item.src" width="35" height="35" alt="">\n      <span>{{item.text}}</span>\n      <div float-end>90  <span>分</span></div>\n    </li>\n  </ul>\n</ion-content>\n'/*ion-inline-end:"E:\vip\ionic\c\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_2__services_pageButton_service__["a" /* PageButtonService */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_webconfig_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {LoginPage} from "../login/login";


var HomePage = (function () {
    function HomePage(//public navCtrl: NavController,
        //public appCtrl: App,
        platform, conf, PageButtonService) {
        this.platform = platform;
        this.conf = conf;
        this.PageButtonService = PageButtonService;
    }
    HomePage.prototype.goToOtherPage = function () {
        // this.appCtrl.getRootNav().push(LoginPage);
        // this.navCtrl.push(LoginPage);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\vip\ionic\c\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title class="wulv-title-center">\n      考试大厅\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ul padding>\n    <li (click)="PageButtonService.goPage(\'AskPage\', {ask: item.text})" *ngFor="let item of conf.data.ksList.list">\n      <img [src]="conf.data.ksList.url + item.src" [alt]="item.text">\n      <p>{{item.text}}</p>\n    </li>\n  </ul>\n  <!--<button ion-button block  (click)="showAlert()"></button>-->\n</ion-content>\n'/*ion-inline-end:"E:\vip\ionic\c\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__["a" /* PageButtonService */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(112);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_webconfig_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, c) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.backgroundColorByHexString("#00FFFFFF");
            // statusBar.styleBlackTranslucent();
            splashScreen.hide();
            console.log(c);
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\vip\ionic\c\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\vip\ionic\c\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_webconfig_service__["a" /* webConfig */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pageButton_service__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_webconfig_service__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, PageButtonService, toastCtrl, c) {
        this.navCtrl = navCtrl;
        this.PageButtonService = PageButtonService;
        this.toastCtrl = toastCtrl;
        this.c = c;
        this.lr = true;
        this.loginToastTF = true;
        // statusBar.backgroundColorByHexString("#80FFFFFF");
    }
    LoginPage.prototype.ionViewWillLeave = function () {
        this.c.user['login'] || this.PageButtonService.select(0);
    };
    LoginPage.prototype.loginToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: '正在登录...',
            duration: 500,
            position: 'middle',
            cssClass: 'wulv-toast-def'
        });
        this.loginToastTF && toast.present().then(function () {
            toast.onDidDismiss(function () {
                /*let err = this.toastCtrl.create({
                  message: '登录失败 , 没后台',
                  duration: 2500,
                  position: 'middle',
                  cssClass: 'wulv-toast-def'
                });
                err.onDidDismiss(() => {
                  this.loginToastTF = true;
                  this.onBack();
                });
                err.present();*/
                var success = _this.toastCtrl.create({
                    message: '登录成功',
                    duration: 1500,
                    position: 'middle',
                    cssClass: 'wulv-toast-def'
                });
                success.onDidDismiss(function () {
                    _this.loginToastTF = true;
                    _this.c.user['login'] = true;
                    _this.PageButtonService.backRootPage();
                });
                success.present();
            });
        });
        this.loginToastTF = false;
    };
    LoginPage.prototype.regToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: '正在注册...',
            duration: 500,
            position: 'middle',
            cssClass: 'wulv-toast-def'
        });
        this.loginToastTF && toast.present().then(function () {
            toast.onDidDismiss(function () {
                var err = _this.toastCtrl.create({
                    message: '注册失败 , 没后台',
                    duration: 1500,
                    position: 'middle',
                    cssClass: 'wulv-toast-def'
                });
                err.onDidDismiss(function () {
                    _this.loginToastTF = true;
                });
                err.present();
                /*let success = this.toastCtrl.create({
                  message: '登录成功',
                  duration: 1500,
                  position: 'middle',
                  cssClass: 'wulv-toast-def'
                });
                success.onDidDismiss(() => {
                  this.loginToastTF = true;
                  this.c.user['login'] = true;
                  this.PageButtonService.backRootPage();
                });
                success.present();*/
            });
        });
        this.loginToastTF = false;
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\vip\ionic\c\src\pages\login\login.html"*/'<ion-content>\n  <ion-icon (click)="PageButtonService.backRootPage()" name="wulvIcon-back"></ion-icon>\n  <div class="form">\n    <!--<form (submit)="">-->\n      <label>\n        <ion-icon name="wulvIcon-login"></ion-icon>\n        <input type="text" placeholder="用户名">\n      </label>\n      <label>\n        <ion-icon name="wulvIcon-password"></ion-icon>\n        <input type="password" placeholder="密码">\n      </label>\n      <label [hidden]="lr">\n        <ion-icon name="wulvIcon-password"></ion-icon>\n        <input type="password" placeholder="确认密码">\n      </label>\n      <button [hidden]="!lr" (click)="loginToast()">登录</button>\n      <button [hidden]="lr" (click)="regToast()">注册</button>\n      <div>\n        <span float-left [hidden]="!lr" (click)="lr = false">注册</span>\n        <span float-left [hidden]="lr" (click)="lr = true">登录</span>\n        <span float-right>忘记密码</span>\n      </div>\n    <!--</form>-->\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\vip\ionic\c\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_pageButton_service__["a" /* PageButtonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__services_webconfig_service__["a" /* webConfig */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AskPage = (function () {
    function AskPage(navParams) {
        this.navParams = navParams;
        this.ask = navParams.get('ask');
    }
    AskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ask',template:/*ion-inline-start:"E:\vip\ionic\c\src\pages\ask\ask.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>\n      {{ask}}考试\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  没题目\n</ion-content>\n'/*ion-inline-end:"E:\vip\ionic\c\src\pages\ask\ask.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], AskPage);
    return AskPage;
}());

//# sourceMappingURL=ask.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AjaxService = (function () {
    function AjaxService() {
    }
    AjaxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AjaxService);
    return AjaxService;
}());

//# sourceMappingURL=ajax.service.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return webConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var webConfig = (function () {
    function webConfig() {
        this.user = {
            login: false
        };
        this.data = {
            ksList: {
                url: './assets/imgs/home/',
                list: [
                    { src: 'html.png', text: 'HTML' },
                    { src: 'css.png', text: 'CSS' },
                    { src: 'js.png', text: 'JS' },
                    { src: 'jq.png', text: 'JQuery' },
                    { src: 'demo.png', text: '实战' },
                    { src: 'kj.png', text: '框架' },
                ]
            }
        };
        this.updateUrl = 'http://localhost:8100/update.xml';
    }
    webConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], webConfig);
    return webConfig;
}());

//# sourceMappingURL=webconfig.service.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageButtonService = (function () {
    //构造函数 依赖注入
    function PageButtonService(platform, appCtrl, toastCtrl) {
        this.platform = platform;
        this.appCtrl = appCtrl;
        this.toastCtrl = toastCtrl;
        //控制硬件返回按钮是否触发，默认false
        this.backButtonPressed = false;
    }
    //注册方法
    PageButtonService.prototype.registerBackButtonAction = function (tabRef, navCtrl) {
        var _this = this;
        this.tabRef = tabRef;
        this.navCtrl = navCtrl;
        //registerBackButtonAction是系统自带的方法
        this.platform.registerBackButtonAction(function () {
            //获取NavController
            var activeNav = _this.appCtrl.getActiveNav();
            //如果可以返回上一页，则执行pop
            if (activeNav.canGoBack()) {
                activeNav.pop();
            }
            else if (navCtrl.canGoBack()) {
                navCtrl.pop();
            }
            else {
                if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
                    //执行退出
                    _this.showExit();
                }
                else {
                    //选择首页第一个的标签
                    tabRef.select(0);
                }
            }
        });
    };
    //退出应用方法
    PageButtonService.prototype.showExit = function () {
        var _this = this;
        //如果为true，退出
        if (this.backButtonPressed) {
            this.platform.exitApp();
        }
        else {
            //第一次按，弹出Toast
            this.toastCtrl.create({
                message: '再按一次退出应用',
                duration: 2000,
                position: 'middle',
                cssClass: 'wulv-toast-def'
            }).present();
            //标记为true
            this.backButtonPressed = true;
            //两秒后标记为false，如果退出的话，就不会执行了
            setTimeout(function () { return _this.backButtonPressed = false; }, 2000);
        }
    };
    PageButtonService.prototype.select = function (num) {
        this.tabRef.select(num);
    };
    PageButtonService.prototype.backRootPage = function () {
        // this.appCtrl.getRootNav().pop();
        this.navCtrl.pop();
    };
    PageButtonService.prototype.goPage = function (p, params) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["b" /* page */][p], params);
    };
    PageButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ToastController */]])
    ], PageButtonService);
    return PageButtonService;
}());

//# sourceMappingURL=pageButton.service.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map