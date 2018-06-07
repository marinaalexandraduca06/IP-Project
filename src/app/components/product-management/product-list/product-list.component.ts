import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../../models/index';
import { IColumnSchema } from '../../../app.interfaces';
import { ProductService } from '../../../services';

@Component({
  selector: 'ip-product-list',
  styleUrls: ['./product-list.component.css'],
  templateUrl: './product-list.component.html'
})
export class ProductListComponent implements OnInit {
  public products: ProductModel[] = [];

  constructor(
    private router: Router,
    private productService: ProductService
  ) {}

  public async ngOnInit(): Promise<void> {
    this.products = await this.productService.getProducts();
  }

  public goToProductDetails(productId: string): void {
    this.router.navigateByUrl(`/product-management/product-details/${productId}`);
  }
}
