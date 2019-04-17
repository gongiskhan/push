import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { Firebase } from '@ionic-native/firebase';
import {FcmService} from "./fcm.service";

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
    HelloIonicPage,
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
    HelloIonicPage,
    ItemDetailsPage,
    ListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    FcmService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
