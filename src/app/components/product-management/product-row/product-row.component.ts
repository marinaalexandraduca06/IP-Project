import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../models/index';
import { ButtonTypeInterface } from '../../../app.interfaces';

@Component({
  selector: 'ip-product-row',
  styleUrls: ['./product-row.component.css'],
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent implements OnInit {
  @Input() public product: ProductModel;
  @Input() public inCartSection: boolean;
  @Input() public productQuantity: number;

  public editQuantityPopupOpened: boolean;
  public editQuntityPopupButtons: ButtonTypeInterface[] = [
    {
      disabled: false,
      name: 'Save',
      primary: true
    }
  ];

  public ngOnInit(): void {
    this.productQuantity = 10;
  }

  public editQuantity(): void {
    this.editQuantityPopupOpened = true;
  }
  public removeOrder(): void {
    // delete order
  }

  public closeEditQuntityPopup(buttonName): void {
    if (buttonName !== 'Cancel') {
      // patch order
    }
    this.editQuantityPopupOpened = false;
  }
}
