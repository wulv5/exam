webpackJsonp([0],{114:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=114},115:function(t,e,n){"use strict";n.d(e,"a",function(){return _}),n.d(e,"b",function(){return T});var o=n(0),i=n(32),a=n(20),r=n(270),c=n(200),s=n(201),l=n(199),u=n(203),f=n(283),d=n(196),p=n(198),h=n(34),g=n(25),b=n(53),m=n(54),v=n(284),y=n(202),k=n(285),j=n(286),R=n(287),P=n(288),w=n(15),x=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},O=[r.a,c.a,s.a,l.a,u.a,f.a,P.a,P.c,P.b,P.d],_=function(){function t(){}return t=x([Object(o.I)({declarations:O.slice(),imports:[i.a,a.d.forRoot(r.a,{},{links:[]}),w.a,m.a.forRoot({name:"_tzweb",storeName:"_exam",driverOrder:["sqlite","indexeddb","websql","localstorage"]})],bootstrap:[a.b],entryComponents:O.slice(),providers:[d.a,p.a,{provide:o.u,useClass:a.c},h.a,g.a,b.a,v.a,y.a,k.a,j.a,R.a]})],t)}(),T={MyApp:r.a,ContactPage:c.a,HomePage:s.a,TabsPage:l.a,LoginPage:u.a,AskPage:f.a}},156:function(t,e){function n(t){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+t+"'.")})}n.keys=function(){return[]},n.resolve=n,t.exports=n,n.id=156},199:function(t,e,n){"use strict";n.d(e,"a",function(){return d});var o=n(0),i=n(200),a=n(201),r=n(34),c=n(20),s=n(25),l=n(54),u=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},f=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},d=function(){function t(t,e,n,o,r,c){var s=this;this.BackButtonService=t,this.platform=e,this.navCtrl=n,this.c=o,this.storage=r,this.tab1Root=a.a,this.tab2Root=i.a,e.ready().then(function(){s.BackButtonService.registerBackButtonAction(s.tabRef,n)})}return u([Object(o._8)("myTabs"),f("design:type",Object)],t.prototype,"tabRef",void 0),t=u([Object(o.m)({template:'<ion-tabs [selectedIndex]="0" no-border #myTabs>\n  <ion-tab [root]="tab1Root" tabsHideOnSubPages="true" tabBadge="" tabTitle="首页" tabIcon="home"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="我的" tabIcon="contacts"></ion-tab>\n</ion-tabs>\n'}),f("design:paramtypes",[r.a,c.i,c.g,s.a,l.b,c.k])],t)}()},200:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n(0),i=n(25),a=n(34),r=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e){this.conf=t,this.pageService=e}return t.prototype.ionViewWillEnter=function(){this.conf.user.login||this.pageService.goPage("LoginPage")},t=r([Object(o.m)({selector:"page-contact",template:'<ion-header no-border>\n  <ion-navbar>\n    <ion-title class="wulv-title-center">\n      综合评分\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list-header>\n    <img src="assets/imgs/icon.png">\n    无虑老师\n  </ion-list-header>\n  <ul padding-right padding-left>\n    <li padding-bottom="10px" (click)="conf.goPage()" padding *ngFor="let item of conf.data.ksList.list">\n      <img float-start [src]="conf.data.ksList.url + item.src" width="35" height="35" alt="">\n      <span float-left>{{item.text}}</span>\n      <div float-end>90  <span>分</span></div>\n    </li>\n  </ul>\n</ion-content>\n'}),c("design:paramtypes",[i.a,a.a])],t)}()},201:function(t,e,n){"use strict";n.d(e,"a",function(){return f});var o=n(0),i=n(20),a=n(25),r=n(34),c=n(202),s=n(203),l=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},u=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},f=function(){function t(t,e,n,o,i){this.navCtrl=t,this.platform=e,this.conf=n,this.PageButtonService=o,this.appVersion=i}return t.prototype.goToOtherPage=function(){this.navCtrl.push(s.a)},t.prototype.goToSlide=function(){var t=this;console.log(1),setTimeout(function(){t.slides.startAutoplay()},2e3)},l([Object(o._8)("slides"),u("design:type",i.j)],t.prototype,"slides",void 0),t=l([Object(o.m)({selector:"page-home",template:'<ion-header no-border>\n  <ion-navbar>\n    <ion-title class="wulv-title-center">\n      考试大厅\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="grid-basic-page">\n\n  \x3c!--<ion-slides #slides\n               pager slidesPerView="1" autoplay="1000" loop="true"\n              spaceBetween="100" zoom="true"\n              (ionSlideAutoplayStop)="goToSlide()">\n    <ion-slide style="background-color: green">\n      <h2>Slide 1</h2>\n    </ion-slide>\n    <ion-slide style="background-color: blue">\n      <h2>Slide 2</h2>\n    </ion-slide>\n    <ion-slide style="background-color: red">\n      <h2>Slide 3</h2>\n    </ion-slide>\n  </ion-slides>--\x3e\n\n  <ion-list no-lines padding>\n    <ion-item float-left text-center margin-bottom align\n              (click)="PageButtonService.goPage(\'AskPage\', {ask: item.text})"\n              *ngFor="let item of conf.data.ksList.list">\n      <img [src]="conf.data.ksList.url + item.src" [alt]="item.text" width="70" height="70">\n      <p>{{item.text}}</p>\n    </ion-item>\n  </ion-list>\n  \x3c!--<ul padding>\n    <li (click)="PageButtonService.goPage(\'AskPage\', {ask: item.text})" *ngFor="let item of conf.data.ksList.list">\n      <img [src]="conf.data.ksList.url + item.src" [alt]="item.text">\n      <p>{{item.text}}</p>\n    </li>\n  </ul>\n  <button ion-button block  (click)="showAlert()"></button>--\x3e\n</ion-content>\n'}),u("design:paramtypes",[i.g,i.i,a.a,r.a,c.a])],t)}()},203:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var o=n(0),i=n(20),a=n(34),r=n(25),c=n(53),s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e,n,o,i){this.navCtrl=t,this.PageButtonService=e,this.toastCtrl=n,this.c=o,this.ajax=i,this.lr=!0,this.loginToastTF=!0}return t.prototype.ionViewWillLeave=function(){this.c.user.login||this.PageButtonService.select(0)},t.prototype.loginToast=function(){var t=this,e=this.toastCtrl.create({message:"正在登录...",duration:100,position:"middle",cssClass:"wulv-toast-def"});this.loginToastTF&&e.present().then(function(){t.ajax.login(t.user,t.pass).then(function(e){if(e.error){var n=t.toastCtrl.create({message:"用户名或密码错误",duration:1500,position:"middle",cssClass:"wulv-toast-def"});n.onDidDismiss(function(){t.loginToastTF=!0}),n.present()}else{var o=t.toastCtrl.create({message:"登录成功",duration:1500,position:"middle",cssClass:"wulv-toast-def"});o.onDidDismiss(function(){t.loginToastTF=!0,t.c.user.login=!0,t.c.user.user=t.user,t.c.user.pass=t.pass,t.ajax.reqJS(),t.PageButtonService.backRootPage()}),o.present()}})}),this.loginToastTF=!1},t.prototype.regToast=function(){var t=this,e=this.toastCtrl.create({message:"正在注册...",duration:500,position:"middle",cssClass:"wulv-toast-def"});this.loginToastTF&&e.present().then(function(){e.onDidDismiss(function(){var e=t.toastCtrl.create({message:"注册失败 , 没后台",duration:1500,position:"middle",cssClass:"wulv-toast-def"});e.onDidDismiss(function(){t.loginToastTF=!0}),e.present()})}),this.loginToastTF=!1},t=s([Object(o.m)({selector:"page-login",template:'<ion-content>\n  <ion-icon (click)="navCtrl.pop()" name="wulvIcon-back"></ion-icon>\n  <div class="form">\n    \x3c!--<form (submit)="">--\x3e\n      <label>\n        <ion-icon name="wulvIcon-login"></ion-icon>\n        <input type="text" placeholder="用户名" [(ngModel)]="user">\n      </label>\n      <label>\n        <ion-icon name="wulvIcon-password"></ion-icon>\n        <input type="password" placeholder="密码" [(ngModel)]="pass">\n      </label>\n      <label [hidden]="lr">\n        <ion-icon name="wulvIcon-password"></ion-icon>\n        <input type="password" placeholder="确认密码" [(ngModel)]="repass">\n      </label>\n      <button [hidden]="!lr" (click)="loginToast()">登录</button>\n      <button [hidden]="lr" (click)="regToast()">注册</button>\n      <div>\n        <span float-left [hidden]="!lr" (click)="lr = false">注册</span>\n        <span float-left [hidden]="lr" (click)="lr = true">登录</span>\n        <span float-right>忘记密码</span>\n      </div>\n    \x3c!--</form>--\x3e\n  </div>\n</ion-content>\n'}),l("design:paramtypes",[i.g,a.a,i.k,r.a,c.a])],t)}()},204:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n(205),i=n(115);Object(o.a)().bootstrapModule(i.a)},25:function(t,e,n){"use strict";n.d(e,"a",function(){return r});var o=n(0),i=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},a=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},r=function(){function t(){this.user={login:!1,user:"",pass:""},this.data={ksList:{url:"./assets/imgs/home/",list:[{src:"html.png",text:"HTML"},{src:"css.png",text:"CSS"},{src:"js.png",text:"JS"},{src:"jq.png",text:"JQuery"},{src:"demo.png",text:"实战"},{src:"kj.png",text:"框架"}]},askList:{}},this.updateUrl="https://wulv5.github.io/exam/www/update.xml"}return t=i([Object(o.A)(),a("design:paramtypes",[])],t)}()},270:function(t,e,n){"use strict";n.d(e,"a",function(){return p});var o=n(0),i=n(20),a=n(196),r=n(198),c=n(199),s=n(25),l=n(54),u=n(53),f=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},d=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},p=function(){function t(t,e,n,o,i,a,r){var s=this;this.storage=a,this.ajax=r,this.rootPage=c.a,t.ready().then(function(){e.backgroundColorByHexString("00123456"),n.hide(),s.storage.get("webconfig").then(function(t){for(var e in t)o[e]=t[e];o.user.login&&s.ajax.login(o.user.user,o.user.pass).then(function(t){t.ticket&&s.ajax.reqJS()||(o.user.login=!1)})})})}return t=f([Object(o.m)({template:'<ion-nav [root]="rootPage"></ion-nav>\n'}),d("design:paramtypes",[i.i,a.a,r.a,s.a,i.k,l.b,u.a])],t)}()},283:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var o=n(0),i=n(20),a=n(25),r=n(34),c=n(53),s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e,n,o){this.navParams=t,this.c=e,this.PageButtonService=n,this.ajax=o,this.ask=t.get("ask"),this.list=this.c.data.askList[this.ask],console.log(this.c.data.askList[this.ask])}return t.prototype.ionViewWillEnter=function(){!this.c.user.login&&this.reLoad()},t.prototype.reLoad=function(){var t=this;this.ajax.login(this.c.user.user,this.c.user.pass).then(function(e){e.ticket&&t.ajax["req"+t.ask]&&t.ajax["req"+t.ask]().then(function(e){t.list=t.c.data.askList[t.ask]||[]})})},t.prototype.doRefresh=function(t){this.reLoad(),setTimeout(function(){t.complete()},1e3)},t=s([Object(o.m)({selector:"page-ask",template:'<ion-header no-border>\n  <ion-navbar>\n    <ion-title>\n      {{ask}}考试\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    \x3c!--pullingIcon="arrow-dropdown"\n      pullingText="Pull to refresh"\n      refreshingSpinner="circles"\n      refreshingText="Refreshing..."--\x3e\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div *ngIf="!list">\n    没题目\n  </div>\n  <div *ngIf="!c.user.login">\n    <p>请先登录</p>\n    <button ion-button (click)="PageButtonService.goPage(\'LoginPage\')">登录</button>\n  </div>\n  <ion-card *ngFor="let item of list;index as i">\n    <ion-card-header>{{i+1}} . {{item.question}}</ion-card-header>\n    <ion-card-content>\n      <p [innerText]="item.q_code"></p>\n      <p>选项 : {{item.options}}</p>\n    </ion-card-content>\n  </ion-card>\n\n  \x3c!--<ion-infinite-scroll [enabled]="false" (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content\n      loadingSpinner="bubbles"\n      loadingText="Loading more data...">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>--\x3e\n</ion-content>\n'}),l("design:paramtypes",[i.h,a.a,r.a,c.a])],t)}()},288:function(t,e,n){"use strict";n.d(e,"a",function(){return c}),n.d(e,"b",function(){return s}),n.d(e,"d",function(){return l}),n.d(e,"c",function(){return u});var o=n(0),i=n(20),a=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},r=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},c=function(){function t(t,e,n){this.menu=e,this.loadingCtrl=n,e.enable(!0),this.loadingCtrl.create({spinner:"dots",content:'<div class="custom-spinner-container">\n        <div class="custom-spinner-box">123</div>\n      </div>',duration:5e3,showBackdrop:!0,enableBackdropDismiss:!0}).present(),setTimeout(function(){},5e3)}return t=a([Object(o.m)({template:'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n<ion-menu [content]="content" side="right">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="menu.open(PageOne)">\n        Home\n      </button>\n      <button ion-item (click)="menu.open()">\n        Friends\n      </button>\n      <button ion-item (click)="menu.open()">\n        Events\n      </button>\n      <button ion-item (click)="menu.close()">\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'}),r("design:paramtypes",[i.a,i.f,i.e])],t)}(),s=function(){function t(){}return t=a([Object(o.m)({template:"\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"})],t)}(),l=function(){function t(){}return t=a([Object(o.m)({template:"\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Friends\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"})],t)}(),u=function(){function t(){}return t=a([Object(o.m)({template:"\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name='menu'></ion-icon>\n    </button>\n    <ion-title>\n      Events\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding>\n  <button ion-button block menuToggle>Toggle Menu</button>\n</ion-content>\n"})],t)}()},34:function(t,e,n){"use strict";n.d(e,"a",function(){return s});var o=n(0),i=n(20),a=n(115),r=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},c=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},s=function(){function t(t,e,n){this.platform=t,this.appCtrl=e,this.toastCtrl=n,this.backButtonPressed=!1}return t.prototype.registerBackButtonAction=function(t,e){var n=this;this.tabRef=t,this.navCtrl=e,this.platform.registerBackButtonAction(function(){var o=n.appCtrl.getActiveNav();o.canGoBack()?o.pop():e.canGoBack()?e.pop():null==t||t._selectHistory[t._selectHistory.length-1]===t.getByIndex(0).id?n.showExit():t.select(0)})},t.prototype.showExit=function(){var t=this;this.backButtonPressed?this.platform.exitApp():(this.toastCtrl.create({message:"再按一次退出应用",duration:2e3,position:"middle",cssClass:"wulv-toast-def"}).present(),this.backButtonPressed=!0,setTimeout(function(){return t.backButtonPressed=!1},2e3))},t.prototype.select=function(t){this.tabRef.select(t)},t.prototype.backRootPage=function(){this.navCtrl.pop()},t.prototype.goPage=function(t,e){this.navCtrl.push(a.b[t],e)},t=r([Object(o.A)(),c("design:paramtypes",[i.i,i.a,i.k])],t)}()},53:function(t,e,n){"use strict";n.d(e,"a",function(){return u});var o=n(0),i=n(279),a=n.n(i),r=n(25),c=n(54),s=this&&this.__decorate||function(t,e,n,o){var i,a=arguments.length,r=a<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var c=t.length-1;c>=0;c--)(i=t[c])&&(r=(a<3?i(r):a>3?i(e,n,r):i(e,n))||r);return a>3&&r&&Object.defineProperty(e,n,r),r},l=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)},u=function(){function t(t,e){this.c=t,this.storage=e}return t.prototype.login=function(t,e){var n=this;return new Promise(function(o){a.a.ajax({url:"https://wulv5.com/api/auth",type:"post",data:{qq:t,password:e},success:function(t){t.ticket&&(n.ticket=t.ticket.ticket),o(t)}})})},t.prototype.reqJS=function(){var t=this;return new Promise(function(e){a.a.ajax({url:"https://wulv5.com/api/javascript/mcq",type:"get",data:{ticket:t.ticket},success:function(n){t.c.data.askList.JS=n,t.storage.set("webconfig",t.c),e(n)}})})},t=s([Object(o.A)(),l("design:paramtypes",[r.a,c.b])],t)}()}},[204]);
