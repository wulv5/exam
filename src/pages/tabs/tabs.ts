import {Component, ViewChild} from '@angular/core';

import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {PageButtonService} from "../../services/pageButton.service";
import {NavController, Platform, ToastController} from "ionic-angular";
import {webConfig} from "../../services/webconfig.service";
import {Storage} from '@ionic/storage';
import {BasicPage} from "../muen/menu";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  @ViewChild('myTabs') tabRef;

  constructor(public BackButtonService: PageButtonService,
              public platform: Platform,
              public navCtrl: NavController,
              public c: webConfig,
              private storage: Storage,
              toastCtrl: ToastController) {
    platform.ready().then(() => {
      this.BackButtonService.registerBackButtonAction(this.tabRef, navCtrl);
      /*storage.set('name', 'Max');
      storage.set('age', 18);
      console.log(storage);*/
    })
  }
}
