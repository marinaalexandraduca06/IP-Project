import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel, UserModel, OrderModel, OrderElementModel } from '../../../models/index';
import { IColumnSchema } from '../../../app.interfaces';
import { OrderStatus } from '../../../app.enums';
import { ProductService } from '../../../services/index';

@Component({
  selector: 'ip-cart',
  styleUrls: ['./cart.component.css'],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  public order: OrderModel;

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  public async ngOnInit(): Promise<void> {
    let products = await this.productService.getProducts();
    products = products.filter((el) => el.name.indexOf('IPhone') !== -1);
    this.order = new OrderModel({
      _id: '1',
      status: OrderStatus.ACTIVE,
      products: products.map((el) => new OrderElementModel({
        product: el,
        quantity: 5
      }))
    });
  }

  public goToProductDetails(productId: string): void {
    this.router.navigateByUrl(`/product-management/product-details/${productId}`);
  }
}
