import {Injectable} from "@angular/core";

@Injectable()

export class webConfig {
  user: object = {
    login: false,
    user: '',
    pass: ''
  };
  data: object = {
    ksList: {
      url: './assets/imgs/home/',
      list: [
        {src: 'html.png', text: 'HTML'},
        {src: 'css.png', text: 'CSS'},
        {src: 'js.png', text: 'JS'},
        {src: 'jq.png', text: 'JQuery'},
        {src: 'demo.png', text: '实战'},
        {src: 'kj.png', text: '框架'},
      ]
    },
    askList: {}
  };
  updateUrl: string = 'https://wulv5.github.io/exam/www/update.xml';
  constructor() {}
}
