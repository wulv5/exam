import {Component, ViewChild} from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {BackButtonService} from "../../services/backButton.service";
import {NavController, Platform} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContactPage;
  @ViewChild('myTabs') tabRef;
  constructor(public BackButtonService: BackButtonService,
              private platform: Platform,
              public navCtrl: NavController) {
    platform.ready().then(() => {
      this.BackButtonService.registerBackButtonAction(this.tabRef, navCtrl)
    })
  }
}
