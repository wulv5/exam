import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {ContactPage} from '../pages/contact/contact';
import {HomePage} from '../pages/home/home';
import {TabsPage} from '../pages/tabs/tabs';
import {LoginPage} from "../pages/login/login";
import {AskPage} from "../pages/ask/ask";
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PageButtonService} from "../services/pageButton.service";
import {webConfig} from "../services/webconfig.service";
import {AjaxService} from "../services/ajax.service";
import {IonicStorageModule} from "@ionic/storage";
import {AppUpdate} from "@ionic-native/app-update";
import {AppVersion} from "@ionic-native/app-version";
import {File} from "@ionic-native/file";
import {FileTransfer} from "@ionic-native/file-transfer";
import {AndroidPermissions} from "@ionic-native/android-permissions";
import {BasicPage, PageTwo, PageThree, PageOne} from "../pages/muen/menu";
import {FormsModule} from "@angular/forms";

const pageArr = [
  MyApp,
  ContactPage,
  HomePage,
  TabsPage,
  LoginPage,
  AskPage,
  BasicPage,
  PageThree,
  PageOne,
  PageTwo
];

@NgModule({
  declarations: [
    ...pageArr
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    FormsModule,
    IonicStorageModule.forRoot({
      name: '_tzweb',
      storeName: '_exam',
      driverOrder: ["sqlite", "indexeddb", "websql", "localstorage"]
    })
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
    AjaxService,
    AppUpdate, AppVersion,
    File, FileTransfer,
    AndroidPermissions
  ]
})
export class AppModule {
}

export const page = {
  MyApp,
  ContactPage,
  HomePage,
  TabsPage,
  LoginPage,
  AskPage
};
