import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, ActivatedRoute } from '@angular/router';
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Authorization } from '../protocals/authorization.service';

@Injectable()
export class RouteGuard implements CanActivate {

    constructor(@Inject('authService') private authService: Authorization) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.authService.doFilter(route, state);
    }
}
