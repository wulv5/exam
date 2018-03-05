import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from "../pages/login/login";
import {AskPage} from "../pages/ask/ask";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {PageButtonService} from "../services/pageButton.service";
import {webConfig} from "../services/webconfig.service";
import {AjaxService} from "../services/ajax.service";

const pageArr = [
  MyApp,
  ContactPage,
  HomePage,
  TabsPage,
  LoginPage,
  AskPage
];
@NgModule({
  declarations: [
    ...pageArr
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ...pageArr
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PageButtonService,
    webConfig,
    AjaxService
  ]
})
export class AppModule {}
export const page = {
  MyApp,
  ContactPage,
  HomePage,
  TabsPage,
  LoginPage,
  AskPage
};
