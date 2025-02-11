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
  Product : Products[] = [];

  constructor(private readonly _route: ActivatedRoute, private readonly _productservice:ProductService){}

  ngOnInit(): void {

    this._productservice.GetAll().subscribe({
      next: data => {
        this.Product  = data;
      },
      error: error => {
        console.error(error);
      }
    })


  }


}
