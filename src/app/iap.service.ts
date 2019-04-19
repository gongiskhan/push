import { Injectable } from '@angular/core';
import { Platform } from 'ionic-angular';
import {InAppPurchase} from "@ionic-native/in-app-purchase";

@Injectable()
export class InAppPurchaseService {

  GOLD = 'com.gg.push.gold';
  goldProduct:any = {};
  isGoldBought: boolean;

  constructor(private platform: Platform, private iap: InAppPurchase) {
    this.platform.ready().then(() => {
      this.getGold();
    });
  }

  getGold() {
    console.log('Getting gold')
    this.iap.getProducts([this.GOLD]).then(products => {
      console.log(products);
      this.goldProduct = products[0];
    });
  }

  buyGold() {
    this.iap.buy(this.goldProduct.productId).then((result) => {
      console.log('Result of purchasing gold: ', result);
      this.isGoldBought = true;
    }).catch((err) => console.error('Error buying gold: ', err));
  }
}
