import { NgModule } from '@angular/core';
import { NgxAuthorizationComponent } from './ngx-authorization.component';
import { FourZeroThreeComponent } from './four-zero-three/four-zero-three.component';

@NgModule({
  declarations: [NgxAuthorizationComponent, FourZeroThreeComponent],
  imports: [
  ],
  exports: [NgxAuthorizationComponent, FourZeroThreeComponent]
})
export class NgxAuthorizationModule { }
