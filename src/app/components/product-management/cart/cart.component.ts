import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel, UserModel } from '../../../models/index';
import { IColumnSchema } from '../../../app.interfaces';

@Component({
  selector: 'ip-cart',
  styleUrls: ['./cart.component.css'],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  public products: ProductModel[] = [];

  constructor(
    private router: Router
  ) {}

  public ngOnInit(): void {
    for (let i = 0; i < 10; i++) {
      const product: ProductModel = new ProductModel({
        _id: '' + i + 1,
        name: 'Name' + ( i + 1 ),
        description: 'Description' + ( i + 1 ),
        price: ( i + 1 ) * 5,
        store: new UserModel(),
        availableQuantity: 100 - i,
        category: 'Category' + ( i + 1 ),
        imageURL: 'http://www.daytonaradio.com/wkro/wp-content/uploads/sites/4/2015/07/ice-cream.jpg'
      });
      this.products.push(product);
    }
  }

  public goToProductDetails(productId: string): void {
    this.router.navigateByUrl(`/product-management/product-details/${productId}`);
  }
}
