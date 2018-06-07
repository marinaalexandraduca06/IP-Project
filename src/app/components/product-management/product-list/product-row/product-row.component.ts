import { Component, Input } from '@angular/core';

import { ProductModel } from '../../../../models/index';
import { ButtonTypeInterface } from '../../../../app.interfaces';

@Component({
  selector: 'ip-product-row',
  styleUrls: ['./product-row.component.css'],
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent {
  @Input() public product: ProductModel;
}
