import { Component, Input } from '@angular/core';

import { ButtonTypeInterface } from '../../../../app.interfaces';
import { OrderElementModel } from '../../../../models/index';

@Component({
  selector: 'ip-cart-row',
  styleUrls: ['./cart-row.component.css'],
  templateUrl: './cart-row.component.html'
})
export class CartRowComponent {
  @Input() public orderElement: OrderElementModel;

  public editQuantityPopupOpened: boolean;
  public editQuntityPopupButtons: ButtonTypeInterface[] = [
    {
      disabled: false,
      name: 'Save',
      primary: true
    }
  ];

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
