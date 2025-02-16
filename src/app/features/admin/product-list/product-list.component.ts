import {Component, OnInit} from '@angular/core';
import {NavbarAdminComponent} from '../navbar-admin/navbar-admin.component';
import {Products} from '../../../core/models/product';
import {ProductService} from '../../../core/services/product/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NavbarAdminComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {

  produts : Products [] = [];

  constructor(private _productService: ProductService) {
  }

  ngOnInit(): void {

    this._productService.GetAll().subscribe({
      next: data => {
        this.produts = data;
      }
    })



  }

}
