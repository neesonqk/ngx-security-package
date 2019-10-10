import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

export interface Authorization {
    doFilter(route: ActivatedRouteSnapshot, state: RouterStateSnapshot);
    isPermit(requiredPermission: string): boolean;
    hasRole(roles: string[]): boolean;
}
