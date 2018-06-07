import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class OrderService {

    public products: BehaviorSubject<any[]> = new BehaviorSubject([]);

    constructor(private httpClient: HttpClient) {
        //
    }

    public async getOrder(userId: any, params?: any): Promise<void> {
        const url = `${CONFIG.apiBase}/api/orders/${userId}`;
        const products = await this.httpClient.get(url).toPromise() as any[];
        this.products.next(products);
    }

    public async updateOrder(userId: any, productId: any): Promise<void> {
        const url = `${CONFIG.apiBase}/api/orders/${userId}`;
        this.getOrder(userId);
    }
}
