import { OrderElementModel } from './index';

export class OrderModel {
  public _id: string;
  public status: string;
  public owner: string;
  public products: OrderElementModel[];

  constructor (fields?: {
    _id?: string,
    status?: string,
    owner?: string,
    products?: OrderElementModel[]
  }) {
    Object.assign(this, fields);
    this.products = fields.products.map((elem) => new OrderElementModel(elem));
  }
}
