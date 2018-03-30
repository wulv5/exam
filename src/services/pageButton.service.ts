import {Injectable} from '@angular/core';
import {Platform, ToastController, App, NavController, Tabs} from 'ionic-angular';
import {page} from "../app/app.module";

@Injectable()
export class PageButtonService {

  //控制硬件返回按钮是否触发，默认false
  backButtonPressed: boolean = false;

  //构造函数 依赖注入
  constructor(public platform: Platform,
              public appCtrl: App,
              public toastCtrl: ToastController) {
  }

  tabRef;
  navCtrl;

  //注册方法
  registerBackButtonAction(tabRef: Tabs, navCtrl?): void {
    this.tabRef = tabRef;
    this.navCtrl = navCtrl;
    //registerBackButtonAction是系统自带的方法
    this.platform.registerBackButtonAction(() => {
      //获取NavController
      let activeNav: NavController = this.appCtrl.getActiveNav();
      //如果可以返回上一页，则执行pop
      if (activeNav.canGoBack()) {
        activeNav.pop();
      } else if (navCtrl.canGoBack()) {
        navCtrl.pop();
      } else {
        if (tabRef == null || tabRef._selectHistory[tabRef._selectHistory.length - 1] === tabRef.getByIndex(0).id) {
          //执行退出
          this.showExit();
        } else {
          //选择首页第一个的标签
          tabRef.select(0);
        }
      }
    });
  }

  //退出应用方法
  private showExit(): void {
    //如果为true，退出
    if (this.backButtonPressed) {
      this.platform.exitApp();
    } else {
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
      setTimeout(() => this.backButtonPressed = false, 2000);
    }
  }

  select(num: number): void {
    this.tabRef.select(num);
  }

  backRootPage(): void {
    // this.appCtrl.getRootNav().pop();
    this.navCtrl.pop();
  }

  goPage(p, params?: object): void {
    this.navCtrl.push(page[p], params);
  }
}
