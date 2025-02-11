//get all

export interface Products {
  id_product : number;
  product_name: string;
  product_description: string;
  product_price: number;
  img: string;
  status:boolean;
  stock_product: number;
  categoriesList : categories[];
  moisDispoList : month[];
}

export interface categories {
  name_categories : string;
}

export interface month {
  name_month : string;

}
