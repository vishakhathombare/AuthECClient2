import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { inject } from '@angular/core';
import { claimReq } from '../utils/claimReq-utils';



export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    const claimKey = route.data['claim'] as keyof typeof claimReq;

    if (claimKey) {
      const claims = authService.getClaims();
      const checkFn = claimReq[claimKey];

      if (checkFn && !checkFn(claims)) {
        router.navigateByUrl('/forbidden');
        return false;
      }
    }

    return true;
  } else {
    router.navigateByUrl('/signin');
    return false;
  }
};
