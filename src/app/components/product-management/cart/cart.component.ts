import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel, UserModel, OrderModel, OrderElementModel } from '../../../models/index';
import { IColumnSchema } from '../../../app.interfaces';
import { OrderStatus } from '../../../app.enums';
import { ProductService, OrderService } from '../../../services/index';

@Component({
  selector: 'ip-cart',
  styleUrls: ['./cart.component.css'],
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  public order: OrderModel;

  constructor(
    private router: Router,
    private productService: ProductService,
    private orderService: OrderService
  ) {}

  public async ngOnInit(): Promise<void> {
    // let products = await this.productService.getProducts();
    // products = products.filter((el) => el.name.indexOf('IPhone') !== -1);
    // this.order = new OrderModel({
    //   _id: '1',
    //   status: OrderStatus.ACTIVE,
    //   products: products.map((el) => new OrderElementModel({
    //     product: el,
    //     quantity: 5
    //   }))
    // });
    this.order = await this.orderService.getItem();
  }

  public goToProductDetails(productId: string): void {
    this.router.navigateByUrl(`/product-management/product-details/${productId}`);
  }

  public async buyProducts(): Promise<void> {
    this.order.status = OrderStatus.DONE;
    this.order = await this.orderService.updateOrder(this.order, this.order._id) as OrderModel;
    this.order = await this.orderService.getItem();
  }

  public async removeProduct(orderElement: OrderElementModel): Promise<void> {
    const index = this.order.products.findIndex((el) => el.product._id === orderElement.product._id);
    if (index) {
      this.order.products.splice(index, 1);
      this.order = await this.orderService.updateOrder(this.order, this.order._id) as OrderModel;
    }
  }

  public async editProductQuantity(orderElement: OrderElementModel): Promise<void> {
    this.order = await this.orderService.updateOrder(this.order, this.order._id) as OrderModel;
  }
}
