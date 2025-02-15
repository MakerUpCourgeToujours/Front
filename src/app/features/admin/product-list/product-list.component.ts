import { Component } from '@angular/core';
import {NavbarAdminComponent} from '../navbar-admin/navbar-admin.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    NavbarAdminComponent
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

}
