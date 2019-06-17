import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import { Platform } from 'ionic-angular';
import {take} from "rxjs/operators";
import {AngularFireMessaging} from "@angular/fire/messaging";

@Injectable()
export class FcmService {

  token;

  constructor(private firebase: Firebase,
              private platform: Platform,
              public messaging: AngularFireMessaging
  ) {}

  async getToken() {

    console.log('this.platform', this.platform);
    console.log('this.platform 2', this.platform.platforms());
    console.log('this.platform 3', this.platform._platforms);

    // if (this.platform.is('android')) {
      console.log('FCM SERVICE: is android');
      this.token = await this.firebase.getToken();
      console.log('FCM token from android', this.token);
      this.registerFCMToken(this.token);
    // }
    // else if (this.platform.is('ios')) {
    //   console.log('FCM SERVICE: is iOS');
    //   this.token = await this.firebase.getToken();
    //   await this.firebase.grantPermission();
    //   console.log('FCM token from ios', this.token);
    //   this.registerFCMToken(this.token);
    // }
    // else {
    //   console.log('FCM SERVICE: is browser');
    //   this.messaging.requestToken.pipe(take(1)).subscribe(token => {
    //     this.token = token;
    //     console.log('FCM token from browser', this.token);
    //     this.registerFCMToken(this.token);
    //   });
    //   this.messaging.requestToken.toPromise().then(token => {
    //     this.token = token;
    //     console.log('FCM token 2 from browser', this.token);
    //     this.registerFCMToken(this.token);
    //   });
    // }
  }

  private registerFCMToken(token) {
    console.log('token', token);
  }

  onNotifications() {
    return this.firebase.onNotificationOpen();
  }
}
