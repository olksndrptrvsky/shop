import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CartService } from 'src/app/cart/services/cart.service';

export const cartNotEmptyGuard: CanActivateFn = (route, state) => {
  let cartService = inject(CartService);
  let router = inject(Router);

  return cartService.isEmptyCart ? router.navigate(['cart']) : true;
};
