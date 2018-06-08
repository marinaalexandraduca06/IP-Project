import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService, OrderService, AuthService } from '../../../services/index';
import { ProductModel, UserModel } from '../../../models/index';

@Component({
  selector: 'ip-product-details',
  styleUrls: ['./product-details.component.css'],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  public product: ProductModel;
  public user: UserModel;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  async ngOnInit(): Promise<void> {
    this.authService.user.subscribe((user) => this.user = user);
    const productId = this.route.snapshot.params.id;
    this.product = await this.productService.getProduct(productId);
  }

  public goBack(): void {
    this.router.navigate(['..']);
  }

  public async addProductToCart(): Promise<void> {
    await this.orderService.addItem(this.product);
    this.router.navigate(['..']);
  }
}
