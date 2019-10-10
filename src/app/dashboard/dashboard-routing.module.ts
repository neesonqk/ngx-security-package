import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SubComponent } from './sub/sub.component';

const routes: Routes = [{
    path: '', component: DashboardComponent
}, {
    path: 'sub', component: SubComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
