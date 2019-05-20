import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {ItemDetailsPage} from '../pages/item-details/item-details';
import {ListPage} from '../pages/list/list';

import {StatusBar} from '@ionic-native/status-bar/ngx';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';

import {AngularFireModule} from 'angularfire2';
import {Firebase} from '@ionic-native/firebase/ngx';
import {FcmService} from "./fcm.service";
import {InAppPurchasePage} from "../pages/in-app-purchase/in-app-purchase";
import {InAppPurchaseService} from "./iap.service";
import {InAppPurchase} from "@ionic-native/in-app-purchase/ngx";
import {AngularFireMessaging} from '@angular/fire/messaging';

const firebaseConfig = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCfbq6Lwet8L6DCJiKmc2-CIzQOUJClvA4",
    authDomain: "pushgg-9f74a.firebaseapp.com",
    databaseURL: "https://pushgg-9f74a.firebaseio.com",
    projectId: "pushgg-9f74a",
    storageBucket: "pushgg-9f74a.appspot.com",
    messagingSenderId: "709432658335"
  }
};

@NgModule({
  declarations: [
    MyApp,
    InAppPurchasePage,
    ItemDetailsPage,
    ListPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InAppPurchasePage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    AngularFireMessaging,
    FcmService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    InAppPurchase,
    InAppPurchaseService
  ]
})
export class AppModule {}
