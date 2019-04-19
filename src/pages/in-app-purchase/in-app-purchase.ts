import { Component } from '@angular/core';
import {InAppPurchaseService} from "../../app/iap.service";

@Component({
  selector: 'in-app-purchase-page',
  templateUrl: 'in-app-purchase.html'
})
export class InAppPurchasePage {

  constructor(public inAppPurchaseService: InAppPurchaseService) {}
}
