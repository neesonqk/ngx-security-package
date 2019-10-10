import { Directive, Input, ElementRef, Inject } from '@angular/core';
import { Authorization } from '../../public-api';

@Directive({
    selector: '[requireRole]'
})
export class RequireRoleDirective {

    @Input('requireRole')
    roles: string[]

    constructor(private el: ElementRef, @Inject('authService') private authService: Authorization) { }

    ngOnInit(): void {
        !this.authService.hasRole(this.roles) &&  (this.el.nativeElement.style.display = 'none');
    }

}
