import { inject } from '@angular/core';
import {
  CanActivateFn,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';

export const adminGuardsGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  let router = inject(Router);
  const isLogin = localStorage.getItem('userLogin');

  if (isLogin === 'false') {
    router.navigate(['/']);
  }

  return true;
};
