import {Component} from '@angular/core';
import {App, NavController} from "ionic-angular";
import {BackButtonService} from "../../services/backButton.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  constructor(public navCtrl: NavController,
              public BackButtonService: BackButtonService
  ) {
    // statusBar.backgroundColorByHexString("#80FFFFFF");
  }
  onClick(): boolean {
    // If no target, or if target is _self, prevent default browser behavior
    if (this.navCtrl) {
      this.navCtrl.pop().catch(() => {
        console.debug('navPop was rejected');
      });
      return false;
    }
    return true;
  }
  ionViewWillLeave() {
    this.BackButtonService.select(0);
  }
}
