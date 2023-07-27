import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

export const userGuard: CanActivateFn = (route, state) => {
  const authService =  inject(AuthService);
    const router = inject(Router);
    if (authService.hasToken())
        return true; // true significa que puede navegar 
    return router.navigate(['/auth/login']);
};
