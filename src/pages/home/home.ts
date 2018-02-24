import {Component} from '@angular/core';
import {App, NavController, Platform} from 'ionic-angular';
import {LoginPage} from "../login/login";
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  ksList: object[] = [
    {src: 'html.png', text: 'HTML'},
    {src: 'css.png', text: 'CSS3'},
    {src: 'js.png', text: 'JS'},
    {src: 'jq.png', text: 'JQuery'},
    {src: 'css3.png', text: 'CSS3'},
    {src: 'h5.png', text: 'HTML5'},
    {src: 'demo.png', text: '实战'},
    {src: 'kj.png', text: '框架'},
  ];
  constructor(public navCtrl: NavController,
              public appCtrl: App,
              public platform: Platform) {
  }

  goToOtherPage() {
    this.appCtrl.getRootNav().push(LoginPage);
    // this.navCtrl.push(ContactPage);
  }
}
