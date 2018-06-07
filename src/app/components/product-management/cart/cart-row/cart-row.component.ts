import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

import { ButtonTypeInterface } from '../../../../app.interfaces';
import { OrderElementModel } from '../../../../models/index';

@Component({
  selector: 'ip-cart-row',
  styleUrls: ['./cart-row.component.css'],
  templateUrl: './cart-row.component.html'
})
export class CartRowComponent {
  @Input() public orderElement: OrderElementModel;
  @Output() public orderElementChanged: EventEmitter<OrderElementModel> = new EventEmitter();
  @Output() public orderElementDeleted: EventEmitter<OrderElementModel> = new EventEmitter();
  @ViewChild('quantityValue') public quantityValue: ElementRef;

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
    this.orderElementDeleted.emit(this.orderElement);
  }

  public closeEditQuntityPopup(buttonName): void {
    if (buttonName !== 'Cancel') {
      this.orderElement.quantity = this.quantityValue.nativeElement.value;
      this.orderElementChanged.emit(this.orderElement);
    }
    this.editQuantityPopupOpened = false;
  }
}
