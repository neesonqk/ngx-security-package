import { Injectable, Inject } from '@angular/core';
import { Authorization } from '../protocals/authorization.service';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorizationConfiguration } from './authorization.configuration';

@Injectable({
    providedIn: 'root'
})
export class AuthorizationService implements Authorization {
    public doFilter(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (!this.role) {
            if (typeof this.config.authRoute === 'function') {
                this.config.authRoute();
            } else {
                this.router.navigateByUrl('/login');
            }
        }

        if (this.config.exposed(state.url)) {
            return true;
        }

        if (!this.config.isAuthorized(state.url, this.role)) {
            return this.router.navigateByUrl(this.config.failRoute);
        } else {
            return true;
        }
    }

    public isPermit(requiredPermission: string) {
        return this.permissions.includes(requiredPermission);
    }

    public hasRole(roles: string[]): boolean {
        return roles.includes(this.role);
    }

    constructor(
        private router: Router,
        @Inject('role') private role: string,
        @Inject('permissions') private permissions: string[],
        @Inject('authConfig') private config: AuthorizationConfiguration) {
    }
}
