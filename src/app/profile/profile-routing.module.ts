import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { RequirePermissionDirective } from 'projects/ngx-authorization/src/lib/directives/require-permission.directive';
import { RequireRoleDirective } from 'projects/ngx-authorization/src/lib/directives/require-role.directive';

const routes: Routes = [{
    path: '', component: ProfileComponent
}];

@NgModule({
    declarations: [RequirePermissionDirective, RequireRoleDirective],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
