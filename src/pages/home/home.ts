import {Component} from '@angular/core';
import {App, NavController, Platform} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {webConfig} from "../../services/webconfig.service";
import {PageButtonService} from "../../services/pageButton.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
              public appCtrl: App,
              public platform: Platform,
              private conf: webConfig,
              private PageButtonService: PageButtonService) {
  }

  goToOtherPage() {
    // this.appCtrl.getRootNav().push(LoginPage);
    // this.navCtrl.push(LoginPage);
  }
}
