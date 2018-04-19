webpackJsonp([0],{

/***/ 113:
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
webpackEmptyAsyncContext.id = 113;

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_ask_ask__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_pageButton_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_webconfig_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_ajax_service__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_muen_menu__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_index_pipe__ = __webpack_require__(283);
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
    __WEBPACK_IMPORTED_MODULE_8__pages_ask_ask__["a" /* AskPage */],
    __WEBPACK_IMPORTED_MODULE_15__pages_muen_menu__["a" /* BasicPage */],
    __WEBPACK_IMPORTED_MODULE_15__pages_muen_menu__["c" /* PageThree */],
    __WEBPACK_IMPORTED_MODULE_15__pages_muen_menu__["b" /* PageOne */],
    __WEBPACK_IMPORTED_MODULE_15__pages_muen_menu__["d" /* PageTwo */]
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: pageArr.concat([
                __WEBPACK_IMPORTED_MODULE_17__services_index_pipe__["a" /* IndexPipe */]
            ]),
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'ios'
                }, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_16__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '_tzweb',
                    storeName: '_exam',
                    driverOrder: ["sqlite", "indexeddb", "websql", "localstorage"]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: pageArr.slice(),
            providers: [
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
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

/***/ 155:
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
webpackEmptyAsyncContext.id = 155;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contact_contact__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_webconfig_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(42);
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
            /*storage.set('name', 'Max');
            storage.set('age', 18);
            console.log(storage);*/
        });
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myTabs'),
        __metadata("design:type", Object)
    ], TabsPage.prototype, "tabRef", void 0);
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\vip\ionic\exam\sox\src\pages\tabs\tabs.html"*/'<ion-tabs [selectedIndex]="0" no-border no-lines #myTabs>\n  <ion-tab [root]="tab1Root" tabsHideOnSubPages="true" tabBadge="" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="我的" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n\n\n'/*ion-inline-end:"E:\vip\ionic\exam\sox\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__["a" /* PageButtonService */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_webconfig_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pageButton_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(18);
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
        conf, pageService, storage, alert) {
        this.conf = conf;
        this.pageService = pageService;
        this.storage = storage;
        this.alert = alert;
    }
    ContactPage.prototype.ionViewWillEnter = function () {
        this.conf.user['login'] || this.pageService.goPage('LoginPage');
    };
    ContactPage.prototype.logout = function () {
        var _this = this;
        var a = this.alert.create({
            title: '是否退出登录',
            buttons: [
                { text: '取消', role: 'caasdfasdfasdfncel' },
                {
                    text: '确认', handler: function () {
                        _this.conf.user['login'] = false;
                        _this.conf.user['user'] = '';
                        _this.conf.user['pass'] = '';
                        _this.storage.clear();
                        _this.pageService.select(0);
                    }
                }
            ]
        });
        a.present();
    };
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\vip\ionic\exam\sox\src\pages\contact\contact.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="wulv-title-center">\n      综合评分\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    <img src="assets/imgs/icon.png">\n    {{conf.user.name}}\n  </ion-list-header>\n  <ul padding-right padding-left>\n    <li padding-bottom="10px" padding *ngFor="let item of conf.data.ksList.list">\n      <img float-start [src]="conf.data.ksList.url + item.src" width="35" height="35" alt="">\n      <span float-left>{{item.text}}</span>\n      <div float-end>90  <span>分</span></div>\n    </li>\n  </ul>\n  <div padding>\n    <button block ion-button (click)="logout()">退出登录</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\vip\ionic\exam\sox\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_2__services_pageButton_service__["a" /* PageButtonService */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* AlertController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_webconfig_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(202);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomePage = (function () {
    function HomePage(navCtrl, 
        //public appCtrl: App,
        menu, conf, PageButtonService, alert) {
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.conf = conf;
        this.PageButtonService = PageButtonService;
        this.alert = alert;
    }
    HomePage.prototype.goToOtherPage = function () {
        // this.appCtrl.getRootNav().push(LoginPage);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.goToSlide = function () {
        var _this = this;
        console.log(1);
        // this.slides.slideNext(1000);
        setTimeout(function () {
            _this.slides.startAutoplay();
        }, 2000);
    };
    HomePage.prototype.gopage = function (text) {
        var _this = this;
        var a = this.alert.create({
            title: '注意事项',
            message: "<p>1. \u8003\u8BD5\u65F6\u95F4\u4E3A1\u5206\u949F</p>\n          \n      ",
            buttons: [
                { text: '取消考试' },
                {
                    text: '开始考试', handler: function () {
                        _this.PageButtonService.goPage('AskPage', { ask: text });
                    }
                }
            ]
        });
        a.present().then();
    };
    HomePage.prototype.mmmm = function () {
        this.menu.enable(true, 'tow');
        this.menu.enable(false, 'one');
        this.menu.open('tow');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */])
    ], HomePage.prototype, "slides", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\vip\ionic\exam\sox\src\pages\home\home.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title class="wulv-title-center">\n      考试大厅\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="grid-basic-page">\n  <!--<ion-slides #slides\n               pager slidesPerView="1" autoplay="3000" loop="true"\n              spaceBetween="100" zoom="true"\n              (ionSlideAutoplayStop)="goToSlide()">\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  </ion-slides>-->\n  <ion-list no-lines padding>\n    <ion-item float-left text-center margin-bottom align\n              (click)="gopage(item.text)"\n              *ngFor="let item of conf.data.ksList.list">\n      <img [src]="conf.data.ksList.url + item.src" [alt]="item.text" width="70" height="70">\n      <p>{{item.text}}</p>\n    </ion-item>\n  </ion-list>\n  <!--<ul padding>\n    <li (click)="PageButtonService.goPage(\'AskPage\', {ask: item.text})" *ngFor="let item of conf.data.ksList.list">\n      <img [src]="conf.data.ksList.url + item.src" [alt]="item.text">\n      <p>{{item.text}}</p>\n    </li>\n  </ul>\n  <button ion-button block  (click)="showAlert()"></button>-->\n</ion-content>\n'/*ion-inline-end:"E:\vip\ionic\exam\sox\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_2__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__["a" /* PageButtonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_pageButton_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_webconfig_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ajax_service__ = __webpack_require__(53);
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
    function LoginPage(navCtrl, PageButtonService, toastCtrl, c, ajax, alert) {
        this.navCtrl = navCtrl;
        this.PageButtonService = PageButtonService;
        this.toastCtrl = toastCtrl;
        this.c = c;
        this.ajax = ajax;
        this.alert = alert;
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
            duration: 100,
            position: 'middle',
            cssClass: 'wulv-toast-def'
        });
        /**/
        this.loginToastTF && toast.present().then(function () {
            _this.ajax.login(_this.user, _this.pass).then(function (res) {
                if (res["error"]) {
                    var err = _this.toastCtrl.create({
                        message: '用户名或密码错误',
                        duration: 1500,
                        position: 'middle',
                        cssClass: 'wulv-toast-def'
                    });
                    err.onDidDismiss(function () {
                        _this.loginToastTF = true;
                    });
                    err.present();
                }
                else {
                    // toast.onDidDismiss(() => {
                    var success = _this.toastCtrl.create({
                        message: '登录成功',
                        duration: 1500,
                        position: 'middle',
                        cssClass: 'wulv-toast-def'
                    });
                    success.onDidDismiss(function () {
                        _this.loginToastTF = true;
                        _this.c.user['login'] = true;
                        _this.c.user['user'] = _this.user;
                        _this.c.user['pass'] = _this.pass;
                        _this.ajax.reqJS();
                        _this.PageButtonService.backRootPage();
                    });
                    success.present();
                    // });
                }
            });
        });
        this.loginToastTF = false;
    };
    LoginPage.prototype.regToast = function () {
        var _this = this;
        var toast = this.toastCtrl.create({
            message: '正在注册...',
            duration: 100,
            position: 'middle',
            cssClass: 'wulv-toast-def'
        });
        this.loginToastTF && toast.present().then(function () {
            _this.ajax.reg(_this.qq, _this.user, _this.pass).then(function (res) {
                var a = _this.alert.create({
                    message: res['message'],
                    buttons: [
                        { text: '确定', handler: function () {
                                _this.loginToastTF = true;
                                _this.user = '';
                                _this.pass = '';
                                _this.qq = '';
                                _this.lr = true;
                            } }
                    ]
                });
                a.present();
            });
            toast.onDidDismiss(function () {
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
            selector: 'page-login',template:/*ion-inline-start:"E:\vip\ionic\exam\sox\src\pages\login\login.html"*/'<ion-content>\n  <ion-icon (click)="navCtrl.pop()" name="wulvIcon-back"></ion-icon>\n  <div class="form">\n    <!--<form (submit)="">-->\n    <label [hidden]="!lr">\n      <ion-icon name="wulvIcon-qq"></ion-icon>\n      <input type="text" placeholder="QQ" [(ngModel)]="user">\n    </label>\n    <label [hidden]="!lr">\n      <ion-icon name="wulvIcon-password"></ion-icon>\n      <input type="password" placeholder="密码" [(ngModel)]="pass">\n    </label>\n    <label [hidden]="lr">\n      <ion-icon name="wulvIcon-qq"></ion-icon>\n      <input type="password" placeholder="QQ" [(ngModel)]="qq">\n    </label>\n    <label [hidden]="lr">\n      <ion-icon name="wulvIcon-login"></ion-icon>\n      <input type="password" placeholder="昵称" [(ngModel)]="user">\n    </label>\n    <label [hidden]="lr">\n      <ion-icon name="wulvIcon-password"></ion-icon>\n      <input type="password" placeholder="密码" [(ngModel)]="pass">\n    </label>\n    <button [hidden]="!lr" color="#996633" ion-button (click)="loginToast()">登录</button>\n    <button [hidden]="lr" (click)="regToast()">注册</button>\n    <div>\n      <span float-left [hidden]="!lr" (click)="lr = false">注册</span>\n      <span float-left [hidden]="lr" (click)="lr = true">登录</span>\n      <span float-right>忘记密码</span>\n    </div>\n    <!--</form>-->\n  </div>\n</ion-content>\n'/*ion-inline-end:"E:\vip\ionic\exam\sox\src\pages\login\login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__services_pageButton_service__["a" /* PageButtonService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_4__services_ajax_service__["a" /* AjaxService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(114);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 25:
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
            login: false,
            name: '',
            user: '',
            pass: ''
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
            },
            askList: {}
        };
        this.updateUrl = 'https://wulv5.github.io/exam/www/update.xml';
    }
    webConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], webConfig);
    return webConfig;
}());

//# sourceMappingURL=webconfig.service.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_webconfig_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_ajax_service__ = __webpack_require__(53);
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
    function MyApp(platform, statusBar, splashScreen, c, toastCtrl, storage, ajax) {
        var _this = this;
        this.storage = storage;
        this.ajax = ajax;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.backgroundColorByHexString("CBCBCB");
            // statusBar.styleBlackTranslucent();
            splashScreen.hide();
            _this.storage.get('webconfig').then(function (res) {
                for (var resKey in res) {
                    c[resKey] = res[resKey];
                }
                /*c.user['login'] && this.ajax.login(c.user['user'], c.user['pass']).then(res => {
                  res['ticket'] && this.ajax.reqJS() || (c.user['login'] = false);
                })*/
            });
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\vip\ionic\exam\sox\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n<!--<ion-menu type="overlay" id="one" [content]="Menu">\n  <ion-header no-border>\n    <ion-navbar>\n      <ion-title>\n        考试大厅\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose detail-none>Close Menu</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-menu type="overlay" id="tow" [content]="Menu">\n  <ion-header no-border>\n    <ion-navbar>\n      <ion-title>\n        asdfasdf\n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <ion-item menuClose detail-none>Close Menu</ion-item>\n    </ion-list>\n  </ion-content>\n</ion-menu>-->\n'/*ion-inline-end:"E:\vip\ionic\exam\sox\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_7__services_ajax_service__["a" /* AjaxService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AskPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_webconfig_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_ajax_service__ = __webpack_require__(53);
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
    function AskPage(navParams, c, PageButtonService, ajax, alert) {
        this.navParams = navParams;
        this.c = c;
        this.PageButtonService = PageButtonService;
        this.ajax = ajax;
        this.alert = alert;
        this.list = [];
        this.inde = 0;
        this.subData = {
            userid: '',
            answer: []
        };
        /*doInfinite(e) {
          console.log(1);
          setTimeout(() => {
            // e.complete();
            e.enable(false);
          },1000)
        }*/
        this.relationship = [];
        this.ask = navParams.get('ask');
        this.list = this.c.data['askList'][this.ask];
    }
    AskPage.prototype.ionViewWillEnter = function () {
        this.c.user['login'] && this.c.user['user'] && this.reLoad();
    };
    AskPage.prototype.reLoad = function () {
        var _this = this;
        this.ajax.login(this.c.user['user'], this.c.user['pass']).then(function (res) {
            _this.subData['userid'] = res['ticket']['userId'];
            res['ticket'] && _this.ajax['req' + _this.ask] && _this.ajax['req' + _this.ask]().then(function (res) {
                _this.list = _this.c.data['askList'][_this.ask] || [];
            });
        });
    };
    AskPage.prototype.doRefresh = function (e) {
        this.reLoad();
        setTimeout(function () {
            e.complete();
        }, 1000);
    };
    AskPage.prototype.askSubmit = function (v) {
        var _this = this;
        this.list.forEach(function (value, index, array) {
            _this.relationship[index] && _this.subData['answer'].push({ id: value['_id'], select: _this.relationship[index] });
        });
        this.ajax.answer(this.subData).then(function (res) {
            var a = _this.alert.create({
                title: res['message'],
                buttons: [
                    {
                        text: '确认'
                    }
                ]
            });
            a.present();
        });
    };
    AskPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ask',template:/*ion-inline-start:"E:\vip\ionic\exam\sox\src\pages\ask\ask.html"*/'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>\n      {{ask}}考试\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <!--pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."-->\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf="!c.user.login">\n    <p>请先登录</p>\n    <button ion-button (click)="PageButtonService.goPage(\'LoginPage\')">登录</button>\n  </div>\n  <div *ngIf="c.user.login">\n    <div *ngIf="!list">没题目</div>\n      <ion-card *ngFor="let value of list;index as i">\n        <ion-card-header>{{i+1}} . {{value.question}}</ion-card-header>\n        <ion-card-content>\n          <p [innerText]="value.q_code"></p>\n          <ion-list no-lines radio-group [(ngModel)]="relationship[i]">\n            <ion-list-header no-lines>选项 :</ion-list-header>\n            <ion-item *ngFor="let val of value.options;index as ind">\n              <ion-label>{{val}}</ion-label>\n              <ion-radio [value]="val"></ion-radio>\n            </ion-item>\n          </ion-list>\n        </ion-card-content>\n      </ion-card>\n    <div padding  *ngIf="list">\n      <button ion-button block type="submit" (click)="askSubmit()">提交答案</button>\n    </div>\n  </div>\n\n  <!-- <ion-infinite-scroll [enabled]="false" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll> -->\n</ion-content>\n'/*ion-inline-end:"E:\vip\ionic\exam\sox\src\pages\ask\ask.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_3__services_pageButton_service__["a" /* PageButtonService */],
            __WEBPACK_IMPORTED_MODULE_4__services_ajax_service__["a" /* AjaxService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AskPage);
    return AskPage;
}());

//# sourceMappingURL=ask.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PageOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PageTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return PageThree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {AjaxService} from "../../services/ajax.service";
var BasicPage = (function () {
    function BasicPage(app, menu, loadingCtrl) {
        this.menu = menu;
        this.loadingCtrl = loadingCtrl;
        menu.enable(true);
        var loading = this.loadingCtrl.create({
            spinner: 'dots',
            content: '<div class="custom-spinner-container">\n' +
                '        <div class="custom-spinner-box">123</div>\n' +
                '      </div>',
            duration: 5000,
            showBackdrop: true,
            enableBackdropDismiss: true,
        });
        loading.present();
        setTimeout(function () {
            // loading.dismiss();
        }, 5000);
    }
    BasicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n<ion-menu [content]=\"content\" side=\"right\">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)=\"menu.open(PageOne)\">\n        Home\n      </button>\n      <button ion-item (click)=\"menu.open()\">\n        Friends\n      </button>\n      <button ion-item (click)=\"menu.open()\">\n        Events\n      </button>\n      <button ion-item (click)=\"menu.close()\">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id=\"nav\" #content [root]=\"rootPage\"></ion-nav>\n"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], BasicPage);
    return BasicPage;
}());

var PageOne = (function () {
    function PageOne() {
    }
    PageOne = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageOne);
    return PageOne;
}());

var PageTwo = (function () {
    function PageTwo() {
    }
    PageTwo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Friends\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageTwo);
    return PageTwo;
}());

var PageThree = (function () {
    function PageThree() {
    }
    PageThree = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            template: "\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"
        })
    ], PageThree);
    return PageThree;
}());

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IndexPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IndexPipe = (function () {
    function IndexPipe() {
        this.index = 1;
    }
    IndexPipe.prototype.transform = function (value) {
        this.index > value && (this.index = 1);
        return this.index++;
    };
    IndexPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({
            name: 'indexpipe'
        })
    ], IndexPipe);
    return IndexPipe;
}());

//# sourceMappingURL=index.pipe.js.map

/***/ }),

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(114);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */]])
    ], PageButtonService);
    return PageButtonService;
}());

//# sourceMappingURL=pageButton.service.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AjaxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__webconfig_service__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(42);
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
    function AjaxService(c, storage) {
        this.c = c;
        this.storage = storage;
    }
    AjaxService.prototype.set = function () {
        this.storage.set('webconfig', this.c);
    };
    AjaxService.prototype.login = function (user, pass) {
        var _this = this;
        return new Promise(function (a) {
            _this.f('https://wulv5.com/api/auth', 'post', "qq=" + user + "&password=" + pass).then(function (res) {
                _this.c.user['name'] = res['name'];
                res['ticket'] && (_this.ticket = res['ticket'].ticket);
                res['ticket'] && (_this.userid = res['ticket'].userId);
                a(res);
            });
        });
    };
    AjaxService.prototype.reg = function (qq, user, pass) {
        var _this = this;
        return new Promise(function (a) {
            _this.f('https://wulv5.com/api/student/doregister', 'post', "qq=" + qq + "&username=" + user + "&password=" + pass).then(function (res) {
                a(res);
            });
        });
    };
    AjaxService.prototype.reqJS = function (ticket) {
        var _this = this;
        return new Promise(function (a) {
            _this.f("https://wulv5.com/api/testpaper/javascript", 'get', "ticket=" + (ticket || _this.ticket) + "&userId=" + _this.userid).then(function (res) {
                _this.c.data['askList'].JS = [];
                res['forEach'](function (val, i) {
                    val.forEach(function (value, index) {
                        _this.c.data['askList'].JS.push(value);
                    });
                });
                _this.set();
                a(res);
            });
        });
    };
    AjaxService.prototype.answer = function (value) {
        var _this = this;
        return new Promise(function (a) {
            _this.f('https://wulv5.com/api/testpaper/answer', 'post', "userId=" + value.userid + "&answer=" + JSON.stringify(value.answer))
                .then(function (res) {
                a(res);
            });
        });
    };
    AjaxService.prototype.f = function (url, method, data) {
        return new Promise(function (a) {
            method === 'post' && fetch(url, {
                method: method,
                body: data,
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }).then(function (data) { return data.json(); }).then(function (res) { return a(res); }) ||
                fetch(url + '?' + data, {
                    method: method
                }).then(function (data) { return data.json(); }).then(function (res) { return a(res); });
        });
    };
    AjaxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__webconfig_service__["a" /* webConfig */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */]])
    ], AjaxService);
    return AjaxService;
}());

//# sourceMappingURL=ajax.service.js.map

/***/ })

},[203]);
//# sourceMappingURL=main.js.map