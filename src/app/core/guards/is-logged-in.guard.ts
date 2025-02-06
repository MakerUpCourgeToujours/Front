import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {LoginService} from '../services/login/login.service';

export const isLoggedInGuard: CanActivateFn = (route, state) => {

  const loginservice = inject(LoginService);
  const router = inject(Router);

  if (localStorage.getItem('token') == null) {
    router.navigate(['login']);
  }



  return true;
};
