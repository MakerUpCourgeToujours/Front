export interface DecodeJwtTokenResponse{
  "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier": string;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/expiration": Date;
  "http://schemas.microsoft.com/ws/2008/06/identity/claims/role": string;
  nameidentifier:string;
  name: string;
  lastname: string;
  emailaddress: string;
  role:string;
  exp: number;

  iss: string;
  aud: string;

  [key: string]: any;
}
