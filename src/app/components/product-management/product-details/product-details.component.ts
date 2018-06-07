import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService, OrderService } from '../../../services';

@Component({
  selector: 'ip-product-details',
  styleUrls: ['./product-details.component.css'],
  templateUrl: './product-details.component.html'
})

export class ProductDetailsComponent implements OnInit {

  public product: any;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    const productId = this.route.snapshot.params.id;
    // this.product = this.productService.getProduct(productId);
  }

  public goBack(): void {
    this.router.navigate(['..']);
  }

  public addProductToCart(): void {
    // this.orderService.updateOrder(undefined, this.product.id);
    console.log('item added');
  }
}
