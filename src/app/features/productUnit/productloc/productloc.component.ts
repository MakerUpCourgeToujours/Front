import {Component, OnInit} from '@angular/core';
import {Products} from '../../../core/models/product';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {SubtypeService} from '../../../core/services/sub/subtype.service';
import {ProductService} from '../../../core/services/product/product.service';
import {LoginService} from '../../../core/services/login/login.service';
import {DecodeJwtTokenResponse} from '../../../core/models/JwtToken';



@Component({
  selector: 'app-productloc',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './productloc.component.html',
  styleUrl: './productloc.component.css'
})
export class ProductlocComponent implements OnInit {
  Products : Products[] = [];
  MinBuy : number = 0;
  decodeToken : DecodeJwtTokenResponse | null = null;


  constructor(private readonly _router: Router, private readonly _productservice:ProductService , private readonly _logservice: LoginService) {}

  ngOnInit(): void {

      this._productservice.GetAll().subscribe({
        next: data => {
          this.Products  = data.map(p=> ({
            ...p,
            prixTotal : Math.round((p.product_price * 10) * 100) / 100
          }));
        },
        error: error => {
          console.error(error);
        }

      })


      //TODO aller chercher dans un get byID user ca limite ()
    this.MinBuy = this.getMinBuy();

  }

  getMinBuy(){
    this.decodeToken = this._logservice.decodeToken()

    if(this.decodeToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"] == "Admin"){
      return 666
    }

    return this.MinBuy
    //TODO faire le get by id pour aller chercher les info du user
  }
  changePrice(produit: Products, event: any) {

    const quantite = parseInt(event.target.value);
    produit.prixTotal = Math.round((produit.product_price * quantite) * 100) / 100;


  }

  getMoisActuel(): string {
    const month = new Date().toLocaleString('fr-FR', { month: 'long' }).toString();
    const convertMonth = month.charAt(0).toUpperCase() + month.slice(1).toLowerCase();

    return convertMonth

  }

  isLegumeDisponible(legume: any): boolean {

    const monthlegume = legume.moisDispoList.includes(this.getMoisActuel());

    return monthlegume
  }

  goToDetailProduct(id:any){
    this._router.navigate(['/details',id]);
  }


}
