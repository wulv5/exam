import {Component, ViewChild} from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {PageButtonService} from "../../services/pageButton.service";
import {NavController, Platform} from "ionic-angular";
import {AppUpdate} from "@ionic-native/app-update";
import {webConfig} from "../../services/webconfig.service";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  @ViewChild('myTabs') tabRef;
  constructor(public BackButtonService: PageButtonService,
              private platform: Platform,
              public navCtrl: NavController,
              public c: webConfig,
              /*private appUpdate: AppUpdate*/) {
    platform.ready().then(() => {
      this.BackButtonService.registerBackButtonAction(this.tabRef, navCtrl);
      //this.appUpdate.checkAppUpdate(c.updateUrl);
    })
  }
}
