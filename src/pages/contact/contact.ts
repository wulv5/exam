import { Component } from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {webConfig} from "../../services/webconfig.service";
import {PageButtonService} from "../../services/pageButton.service";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    // public navCtrl: NavController,
    public appCtrl: App,
    private conf: webConfig,
    private pageService: PageButtonService) {
  }
  ionViewWillEnter() {
    this.conf.user['login'] || this.pageService.goPage('LoginPage');
  }
}
