import { ProductModel } from './index';

export class OrderElementModel {
  public product: ProductModel;
  public quantity: number;

  constructor (fields?: {
    product?: ProductModel;
    quantity?: number;
  }) {
    this.quantity = fields.quantity;
    this.product = new ProductModel(fields.product);
  }
}
