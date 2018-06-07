import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../models';
import { ProductService } from '../../services';

@Component({
  selector: 'ip-create-product',
  styleUrls: ['./create-product.component.css'],
  templateUrl: './create-product.component.html'
})

export class CreateProductComponent implements OnInit {

  public name: string;
  public description: string;
  public availableQuantity: number;
  public store: string;
  public category: string;
  public price: number;
  public image: any;

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit() { }

  public async createProduct(): Promise<void> {
    const product = new ProductModel({
      name: this.name,
      description: this.description,
      availableQuantity: this.availableQuantity,
      category: this.category,
      price: this.price,
      // image: this.image
    });
    try {
      await this.productService.createProduct(product).toPromise();
      this.router.navigate(['..']);
    } catch (e) {
      console.log(e.error.message);
    }
  }

}
