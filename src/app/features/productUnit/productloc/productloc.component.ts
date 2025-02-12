import {Component, OnInit} from '@angular/core';
import {Products} from '../../../core/models/product';
import {ActivatedRoute} from '@angular/router';
import {SubtypeService} from '../../../core/services/sub/subtype.service';
import {ProductService} from '../../../core/services/product/product.service';



@Component({
  selector: 'app-productloc',
  standalone: true,
  imports: [],
  templateUrl: './productloc.component.html',
  styleUrl: './productloc.component.css'
})
export class ProductlocComponent implements OnInit {
  Products : Products[] = [];


  constructor(private readonly _route: ActivatedRoute, private readonly _productservice:ProductService){}

  ngOnInit(): void {

    this._productservice.GetAll().subscribe({
      next: data => {
        this.Products  = data.map(p=> ({
          ...p,
          prixTotal : p.product_price
        }));
      },
      error: error => {
        console.error(error);
      }
    })


  }

  changePrice(produit: Products, event: any) {

    const quantite = parseInt(event.target.value);
    produit.prixTotal = Math.round((produit.product_price * quantite) * 100) / 100;


  }


}
