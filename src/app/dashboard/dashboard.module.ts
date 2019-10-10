import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SubComponent } from './sub/sub.component';
import { RequirePermissionDirective } from 'projects/ngx-authorization/src/lib/directives/require-permission.directive';
import { RequireRoleDirective } from 'projects/ngx-authorization/src/lib/directives/require-role.directive';

@NgModule({
  declarations: [DashboardComponent, SubComponent, RequirePermissionDirective, RequireRoleDirective],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
