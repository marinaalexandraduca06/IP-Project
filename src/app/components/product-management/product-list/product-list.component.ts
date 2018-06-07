import { Component, OnInit } from '@angular/core';

import { ProductModel } from '../../../models/index';
import { IColumnSchema } from '../../../app.interfaces';

@Component({
  selector: 'ip-product-list',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[] = [];

  public ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      const product: ProductModel = new ProductModel({
        name: 'Name' + ( i + 1 ),
        description: 'Description' + ( i + 1 ),
        price: ( i + 1 ) * 5,
        store: 'Store' + ( i + 1 ),
        rate: i % 2 ? 5 + i : 5 - i,
        availableQuantity: 100 - i,
        category: 'Category' + ( i + 1 ),
        imgURL: 'http://www.daytonaradio.com/wkro/wp-content/uploads/sites/4/2015/07/ice-cream.jpg'
      });
      this.products.push(product);
    }
  }
}
