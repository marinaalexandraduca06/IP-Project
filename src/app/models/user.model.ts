export class UserModel {
  public _id: string;
  public firstName: string;
  public lastName: string;
  public email: string;
  public country: string;
  public city: string;
  public phone: string;
  public address: string;
  public type: string;
  private password: string;

  constructor(fields?: {
    _id?: string,
    firstName?: string,
    lastName?: string,
    email?: string,
    country?: string,
    city?: string,
    phone?: string,
    address?: string,
    password?: string,
    type?: string
  }) {
    Object.assign(this, fields);
  }
}

