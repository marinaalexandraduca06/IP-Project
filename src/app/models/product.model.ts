export class ProductModel {
  public name: string;
  public description: string;
  public rate: number;
  public availableQuantity: number;
  public store: string;
  public category: string;
  public price: number;
  public imgURL: string;

  constructor (fields?: {
    name?: string,
    description?: string,
    rate?: number,
    availableQuantity?: number,
    store?: string,
    category?: string,
    price?: number,
    imgURL?: string
  }) {
    Object.assign(this, fields);
  }
}
