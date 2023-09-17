import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services';

export const isAdminGuard: CanActivateFn = (route, state) => {
  let loginService = inject(LoginService);
  let router = inject(Router);

  return loginService.isLoggedIn && loginService.isAdmin
    ? true
    : router.navigate(['/login']);
};
