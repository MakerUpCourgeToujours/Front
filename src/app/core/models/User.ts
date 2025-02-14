export interface User{
  token : string;
}


export interface loginUser{
  email :string;
  password:string;

}

export interface UserB2B{

  nameCopany: string;
  typeUserB2B: string;
  deliveryLimit: number;
  numAdrress: string;
  street: string;
  city: string;
  postalCode: string;
  tavNumber:string;
  idUser: number
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  isAdmin: Boolean;

}
