import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartObservableService } from 'src/app/cart';

export const cartNotEmptyGuard: CanActivateFn = (route, state) => {
  let cartService = inject(CartObservableService);
  let router = inject(Router);

  return cartService.isEmptyCart ? router.navigate(['cart']) : true;
};
