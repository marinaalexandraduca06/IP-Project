import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CONFIG } from '../../environments/environment';

@Injectable()
export class ProductService {

    constructor(private httpClient: HttpClient) {
        //
    }

    public async getProducts(params?: any): Promise<any> {
        const url = `${CONFIG.apiBase}/api/products`;
        const products = await this.httpClient.get(url).toPromise();
        return products;
    }

    public async getProduct(id: any, params?: any): Promise<any> {
        const url = `${CONFIG.apiBase}/api/products/${id}`;
        const product = await this.httpClient.get(url).toPromise();
        return product;
    }
}
