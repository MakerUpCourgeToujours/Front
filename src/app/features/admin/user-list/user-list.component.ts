import {Component, OnInit} from '@angular/core';
import {NavbarAdminComponent} from "../navbar-admin/navbar-admin.component";
import {RouterLink} from '@angular/router';
import {UserService} from '../../../core/services/login/user.service';
import {UserB2B} from '../../../core/models/User';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [
    NavbarAdminComponent,
    RouterLink
  ],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit {

  Users:UserB2B[] =[];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {

    this._userService.getAllB2B().subscribe({
      next: data => {
        this.Users = data;
        console.log(data);
      }
    })



  }

}
