import {Component, OnInit} from '@angular/core';
import {NavbarAdminComponent} from "../../navbar-admin/navbar-admin.component";
import {RouterLink} from "@angular/router";
import {UserB2B} from '../../../../core/models/User';
import {UserService} from '../../../../core/services/login/user.service';
import {MangeurCreate} from '../../../../core/models/mangeurCreate';

@Component({
  selector: 'app-user-mangeur-list',
  standalone: true,
    imports: [
        NavbarAdminComponent,
        RouterLink
    ],
  templateUrl: './user-mangeur-list.component.html',
  styleUrl: './user-mangeur-list.component.css'
})
export class UserMangeurListComponent implements OnInit {

  Users:MangeurCreate[] =[];

  constructor(private _userService: UserService) {}

  ngOnInit(): void {

    this._userService.getAllB2C().subscribe({
      next: data => {
        this.Users = data;
      }
    })



  }

}
