import { Component } from '@angular/core';
import {NavbarAdminComponent} from './navbar-admin/navbar-admin.component';
import {ProductListComponent} from './product-list/product-list.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    ProductListComponent,
    RouterOutlet
  ],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

}
