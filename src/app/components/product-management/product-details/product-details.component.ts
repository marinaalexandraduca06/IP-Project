import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ProductService, OrderService, AuthService } from '../../../services/index';
import { ProductModel } from '../../../models/index';

@Component({
  selector: 'ip-product-details',
  styleUrls: ['./product-details.component.css'],
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  public product: ProductModel;
  public isLogged: boolean;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.isLogged = this.authService.loggedIn();
    const productId = this.route.snapshot.params.id;
    // this.product = this.productService.getProduct(productId);
    this.product = new ProductModel({
      _id: '1',
      name: 'Name',
      description: 'Description',
      price: 5,
      store: 'Store',
      availableQuantity: 100,
      category: 'Category',
      imgURL:
        'http://www.daytonaradio.com/wkro/wp-content/uploads/sites/4/2015/07/ice-cream.jpg'
    });
  }

  public goBack(): void {
    this.router.navigate(['..']);
  }

  public addProductToCart(): void {
    // this.orderService.updateOrder(undefined, this.product.id);
    console.log('item added');
  }
}
