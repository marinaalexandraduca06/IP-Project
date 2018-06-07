export class ProductModel {
  public _id: string;
  public name: string;
  public description: string;
  public availableQuantity: number;
  public store: string;
  public category: string;
  public price: number;
  public imgURL: string;
  public image: any;

  constructor (fields?: {
    _id?: string,
    name?: string,
    description?: string,
    availableQuantity?: number,
    store?: string,
    category?: string,
    price?: number,
    imgURL?: string,
    image?: any
  }) {
    Object.assign(this, fields);
  }
}
