import { UserModel } from './user.model';

export class ProductModel {
  public _id: string;
  public name: string;
  public description: string;
  public availableQuantity: number;
  public store: UserModel;
  public category: string;
  public price: number;
  public imageURL: string;
  public image: any;

  constructor (fields?: {
    _id?: string,
    name?: string,
    description?: string,
    availableQuantity?: number,
    store?: UserModel,
    category?: string,
    price?: number,
    imageURL?: string,
    image?: any
  }) {
    Object.assign(this, fields);
  }
}
