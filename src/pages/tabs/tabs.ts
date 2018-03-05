import {Component, ViewChild} from '@angular/core';

import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';
import {PageButtonService} from "../../services/pageButton.service";
import {NavController, Platform} from "ionic-angular";
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
              public c: webConfig) {
    platform.ready().then(() => {
      this.BackButtonService.registerBackButtonAction(this.tabRef, navCtrl);
    })
  }
}
