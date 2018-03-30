import {Component} from '@angular/core';
import {NavController, ToastController} from "ionic-angular";
import {PageButtonService} from "../../services/pageButton.service";
import {webConfig} from "../../services/webconfig.service";
import {AjaxService} from "../../services/ajax.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  lr: boolean = true;

  constructor(public navCtrl: NavController,
              public PageButtonService: PageButtonService,
              public toastCtrl: ToastController,
              private c: webConfig,
              private ajax: AjaxService,) {
    // statusBar.backgroundColorByHexString("#80FFFFFF");
  }

  ionViewWillLeave() {
    this.c.user['login'] || this.PageButtonService.select(0);
  }

  loginToastTF: boolean = true;
  user;
  pass;

  loginToast() {
    let toast = this.toastCtrl.create({
      message: '正在登录...',
      duration: 100,
      position: 'middle',
      cssClass: 'wulv-toast-def'
    });
    /**/
    this.loginToastTF && toast.present().then(() => {
      this.ajax.login(this.user, this.pass).then(res => {
        if (res["error"]) {
          let err = this.toastCtrl.create({
            message: '用户名或密码错误',
            duration: 1500,
            position: 'middle',
            cssClass: 'wulv-toast-def'
          });
          err.onDidDismiss(() => {
            this.loginToastTF = true;
          });
          err.present();
        } else {
          // toast.onDidDismiss(() => {
          let success = this.toastCtrl.create({
            message: '登录成功',
            duration: 1500,
            position: 'middle',
            cssClass: 'wulv-toast-def'
          });
          success.onDidDismiss(() => {
            this.loginToastTF = true;
            this.c.user['login'] = true;
            this.c.user['user'] = this.user;
            this.c.user['pass'] = this.pass;
            this.ajax.reqJS();
            this.PageButtonService.backRootPage();
          });
          success.present();
          // });
        }
      });
    });
    this.loginToastTF = false;
  }

  regToast() {
    let toast = this.toastCtrl.create({
      message: '正在注册...',
      duration: 500,
      position: 'middle',
      cssClass: 'wulv-toast-def'
    });
    this.loginToastTF && toast.present().then(() => {
      toast.onDidDismiss(() => {
        let err = this.toastCtrl.create({
          message: '注册失败 , 没后台',
          duration: 1500,
          position: 'middle',
          cssClass: 'wulv-toast-def'
        });
        err.onDidDismiss(() => {
          this.loginToastTF = true;
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
  }

}
