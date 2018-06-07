import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { ProductModel } from '../../models';
import { ProductService } from '../../services';
import { ProductCategories } from '../../app.enums';

@Component({
  selector: 'ip-create-product',
  styleUrls: ['./create-product.component.css'],
  templateUrl: './create-product.component.html'
})

export class CreateProductComponent {

  public name: string;
  public description: string;
  public availableQuantity: number;
  public store: string;
  public category: string;
  public price: number;
  @ViewChild('image')
  public image: ElementRef;

  public Categories: string[] = Object.keys(ProductCategories);

  constructor(private productService: ProductService, private router: Router) { }

  public async createProduct(): Promise<void> {
    // const product = new ProductModel({
    //   name: this.name,
    //   description: this.description,
    //   availableQuantity: this.availableQuantity,
    //   category: this.category,
    //   price: this.price,
    //   // image: this.image
    // });
    const formData: FormData = new FormData();
    formData.append('image', this.image.nativeElement.files[0]);
    formData.append('name', this.name);
    formData.append('description', this.description);
    formData.append('availableQuantity', this.availableQuantity.toString());
    formData.append('category', this.category);
    formData.append('price', this.price.toString());
    try {
      await this.productService.createProduct(formData).toPromise();
      this.router.navigate(['..']);
    } catch (e) {
      console.log(e.error.message);
    }
  }

  public applyCategory(categ: string): void {
    this.category = categ;
  }

}
