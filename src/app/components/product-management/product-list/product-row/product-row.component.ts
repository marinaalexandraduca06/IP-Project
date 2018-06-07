import { Component, OnInit, Input } from '@angular/core';

import { ProductModel } from '../../../../models/index';

@Component({
  selector: 'ip-product-row',
  styleUrls: ['./product-row.component.css'],
  templateUrl: './product-row.component.html'
})
export class ProductRowComponent implements OnInit {
  @Input() public product: ProductModel;

  public ngOnInit(): void {
    //
  }
}
