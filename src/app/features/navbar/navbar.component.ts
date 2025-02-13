import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {LoginService} from '../../core/services/login/login.service';
import {subscribeOn, Subscription} from 'rxjs';
import {DecodeJwtTokenResponse} from '../../core/models/JwtToken';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isloginin : boolean = false;
  userinfo : string |null = null

  constructor(private router: Router , private readonly _loginservice :LoginService) {

    if (localStorage.getItem('token') != null) {
      this.isloginin = true;

    }
  }

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    const decodedToken = this._loginservice.decodeToken();
    //console.log(decodedToken);
    if (decodedToken) {
      this.userinfo = decodedToken["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    }
  }




  lougout(){
    this._loginservice.logout()
    this.isloginin = false

  }

}
