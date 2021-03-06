import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { CONFIG } from '../../environments/environment';
import { ProductModel } from '../models';
import { AuthService } from './auth.service';

@Injectable()
export class ProductService {

  constructor(private httpClient: HttpClient, private authService: AuthService) {
    //
  }

  public async getProducts(params?: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${CONFIG.apiBase}/products`;
    const products = await this.httpClient.get(url, httpOptions).toPromise();
    return products['result'].docs;
  }

  public async getProduct(id: any, params?: any): Promise<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const url = `${CONFIG.apiBase}/products/${id}`;
    const product = await this.httpClient.get(url, httpOptions).toPromise();
    return product['result'];
  }

  public createProduct(product: FormData): Observable<ProductModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'userId': this.authService.loggedIn ? this.authService.user.getValue()._id : ''
      })
    };
    const url = `${CONFIG.apiBase}/products`;
    return this.httpClient.post(url, product, httpOptions) as Observable<ProductModel>;
  }
}
