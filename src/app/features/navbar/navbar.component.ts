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
  userinfo : DecodeJwtTokenResponse | null = null;

  constructor(private router: Router , private readonly _loginservice :LoginService) {
    this._loginservice._currentUser$.subscribe(user => {this.isloginin = true;})
    this.userinfo = this._loginservice.decodeToken()

    console.log('userinfo',this.userinfo)
  }





  lougout(){
    this._loginservice.logout()
    this.isloginin = false
    console.log(this.isloginin)
  }

}
