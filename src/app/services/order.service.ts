import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { CONFIG } from '../../environments/environment';
import { OrderModel, OrderElementModel, ProductModel } from '../models';
import { AuthService } from './auth.service';
import { OrderStatus } from '../app.enums';

@Injectable()
export class OrderService {

  public products: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    //
  }

  public async getOrder(userId: any, params?: any): Promise<void> {
    const url = `${CONFIG.apiBase}/orders/${userId}`;
    const products = await this.httpClient.get(url).toPromise() as any[];
    this.products.next(products);
  }

  public async updateOrder(products: OrderModel, orderId: string): Promise<OrderModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'userId': this.authService.user.getValue()._id
      })
    };
    const url = `${CONFIG.apiBase}/orders/${orderId}`;
    return (await this.httpClient.patch(url, products).toPromise())['result'];
  }

  public async getItem(): Promise<OrderModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'userId': this.authService.user.getValue()._id
      })
    };
    const url = `${CONFIG.apiBase}/orders`;
    const orders: OrderModel[] = (await this.httpClient.get(url, httpOptions).toPromise())['result'].docs;
    const unfinishedOrders = orders.filter((el) => el.status !== OrderStatus.DONE);
    let order: OrderModel;
    if (unfinishedOrders.length) {
      order = unfinishedOrders[0];
    }
    const orderUrl = `${CONFIG.apiBase}/orders/${order._id}`;
    return (await this.httpClient.get(orderUrl, httpOptions).toPromise())['result'];
  }

  public async addItem(product: ProductModel): Promise<void> {
    const order = await this.getItem();
    const index = order.products.findIndex((el) => el.product._id === product._id);
    if (index > -1) {
      order.products[index].quantity++;
    } else {
      order.products.push({ product, quantity: 1 });
    }
    await this.updateOrder(order, order._id);
  }
}
