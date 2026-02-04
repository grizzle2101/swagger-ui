import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { TokenService } from '../services/token-service';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  let tokenService = inject(TokenService);
  return tokenService.hasToken();
};
