import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FourZeroThreeComponent, RouteGuard } from 'projects/ngx-authorization/src/public-api';

const routes: Routes = [{
    path: '403',
    component: FourZeroThreeComponent
}, {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [RouteGuard]
}, {
    path: 'profile',
    loadChildren: './profile/profile.module#ProfileModule',
    canActivate: [RouteGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
