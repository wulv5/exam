import {Component} from '@angular/core';
import {App, NavParams} from "ionic-angular";

@Component({
  selector: 'page-ask',
  templateUrl: 'ask.html'
})

export class AskPage {
  ask: string;
  constructor(public navParams: NavParams) {
    this.ask = navParams.get('ask');
  }
}
