import {Component, ViewChild} from '@angular/core';
import {/*App, */NavController, Platform, Slides} from 'ionic-angular';
import {webConfig} from "../../services/webconfig.service";
import {PageButtonService} from "../../services/pageButton.service";
import {AppVersion} from "@ionic-native/app-version";
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  version;
  @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController,
              //public appCtrl: App,
              public platform: Platform,
              private conf: webConfig,
              private PageButtonService: PageButtonService,
              private appVersion: AppVersion,) {
    /*appVersion.getVersionNumber().then(d => {
      this.version = d;
    },e => {
      this.version = e;
    });*/
  }

  goToOtherPage() {
    // this.appCtrl.getRootNav().push(LoginPage);
    this.navCtrl.push(LoginPage);
  }

  goToSlide() {
    console.log(1);
    // this.slides.slideNext(1000);
    setTimeout(() => {
      this.slides.startAutoplay()
    }, 2000)
  }
}
