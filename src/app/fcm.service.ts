
import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase';
import { Platform } from 'ionic-angular';

@Injectable()
export class FcmService {

  constructor(private firebase: Firebase,
              private platform: Platform) {}

  async getToken() {
    let token;

    if (this.platform.is('android')) {
      token = await this.firebase.getToken();
    }

    if (this.platform.is('ios')) {
      token = await this.firebase.getToken();
      await this.firebase.grantPermission();
    }

    this.saveToken(token);
  }

  private saveToken(token) {
    console.log('token', token);
  }

  onNotifications() {
    return this.firebase.onNotificationOpen();
  }
}
