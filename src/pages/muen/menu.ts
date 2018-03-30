import { Component } from '@angular/core';

import {App, LoadingController, MenuController} from 'ionic-angular';
// import {AjaxService} from "../../services/ajax.service";


@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Menus
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
<ion-menu [content]="content" side="right">
  <ion-header>
    <ion-toolbar>
      <ion-title>Menu</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list>
      <button ion-item (click)="menu.open(PageOne)">
        Home
      </button>
      <button ion-item (click)="menu.open()">
        Friends
      </button>
      <button ion-item (click)="menu.open()">
        Events
      </button>
      <button ion-item (click)="menu.close()">
        Close Menu
      </button>
    </ion-list>
  </ion-content>
</ion-menu>

<ion-nav id="nav" #content [root]="rootPage"></ion-nav>
`
})
export class BasicPage {
  rootPage: any;
  constructor(app: App, private menu: MenuController,
              private loadingCtrl: LoadingController,
              /*private ajax: AjaxService*/) {
    menu.enable(true);
    let loading = this.loadingCtrl.create({
      spinner: 'dots',
      content: '<div class="custom-spinner-container">\n' +
      '        <div class="custom-spinner-box">123</div>\n' +
      '      </div>',
      duration: 5000,
      showBackdrop: true, // 背景
      enableBackdropDismiss: true, // 通过点击背景取消
    });

    loading.present();

    setTimeout(() => {
      // loading.dismiss();
    }, 5000);
  }
}

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Menus
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageOne { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Friends
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageTwo { }

@Component({
  template: `
<ion-header>
  <ion-navbar>
    <button ion-button menuToggle icon-only>
      <ion-icon name='menu'></ion-icon>
    </button>
    <ion-title>
      Events
    </ion-title>
  </ion-navbar>
</ion-header>
<ion-content padding>
  <button ion-button block menuToggle>Toggle Menu</button>
</ion-content>
`
})
export class PageThree { }
