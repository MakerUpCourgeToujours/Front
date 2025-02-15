import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../../core/services/product/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Products} from '../../../core/models/product';
import {BackDirective} from '../../../core/Directives/back.directive';

@Component({
  selector: 'app-product-unite-detail',
  standalone: true,
  imports: [
    BackDirective
  ],
  templateUrl: './product-unite-detail.component.html',
  styleUrl: './product-unite-detail.component.css'
})
export class ProductUniteDetailComponent implements OnInit {

  constructor(private readonly _productService: ProductService , private readonly _route: ActivatedRoute, private _router: Router) { }

  productdetail:Products = null;
  priceTotal:number = 0;




  ngOnInit(): void {

    const projectId = this._route.snapshot.params['id'];

    this._productService.GetbyId(projectId).subscribe(p =>{
      this.productdetail = p
      this.priceTotal = Math.round((this.productdetail.product_price * 10) * 100) / 100;
    });




  }

  changePrice(event: any) {

    const quantite = parseInt(event.target.value);
    this.priceTotal = Math.round((this.productdetail.product_price * quantite) * 100) / 100;

  }
}
