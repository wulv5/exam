import {Component} from '@angular/core';
import {NavParams} from "ionic-angular";
import {webConfig} from "../../services/webconfig.service";
import {PageButtonService} from "../../services/pageButton.service";
import {AjaxService} from "../../services/ajax.service";

@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html'
})

export class AskPage {
  ask: string;
  list: object;

  constructor(public navParams: NavParams,
              private c: webConfig,
              private PageButtonService: PageButtonService,
              private ajax: AjaxService) {
    this.ask = navParams.get('ask');
    this.list = this.c.data['askList'][this.ask];
    console.log(this.c.data['askList'][this.ask]);
  }

  ionViewWillEnter() {
    !this.c.user['login'] && this.reLoad();
  }

  reLoad() {
    this.ajax.login(this.c.user['user'], this.c.user['pass']).then(res => {
      res['ticket'] && this.ajax['req' + this.ask] && this.ajax['req' + this.ask]().then(res => {
        this.list = this.c.data['askList'][this.ask] || [];
      });
    });
  }

  doRefresh(e) {
    this.reLoad();

    setTimeout(function () {
      e.complete();
    }, 1000)
  }

  /*doInfinite(e) {
    console.log(1);
    setTimeout(() => {
      // e.complete();
      e.enable(false);
    },1000)
  }*/
}
