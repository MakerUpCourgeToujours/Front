import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from '../services/login/login.service';

export const isRoleB2cGuard: CanActivateFn = (route, state) => {


  const router = inject(Router);
  const loginservice = inject(LoginService);
  const userinfo = loginservice.decodeToken()
  const role = userinfo?.
    ['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']

  if (role === 'admin') {
    return true;
  }

  if(role === 'B2C') {
    return true;
  }

  if(role === 'B2B') {
    router.navigate(['home']);
  }





  return true;
};
