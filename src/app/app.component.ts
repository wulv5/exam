import { Component } from '@angular/core';
import {Platform, ToastController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {webConfig} from "../services/webconfig.service";
import {Storage} from "@ionic/storage";
import {AjaxService} from "../services/ajax.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              c: webConfig,
              toastCtrl: ToastController,
              private storage: Storage,
              private ajax: AjaxService) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.backgroundColorByHexString("00123456");
      // statusBar.styleBlackTranslucent();
      splashScreen.hide();
      this.storage.get('webconfig').then(res => {
        for (let resKey in res) {
          c[resKey] = res[resKey];
        }
        c.user['login'] &&
        this.ajax.login(c.user['user'], c.user['pass']).then(res => {
          res['ticket'] && this.ajax.reqJS() || (c.user['login'] = false);
        })
      })
      /*if (platform.is('ios')) {
        let toast = toastCtrl.create({
          message: 'User was added successfully',
          duration: 10000,
          position: 'top',
          showCloseButton: true,
          closeButtonText: '添加'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }*/
    });
  }
}
