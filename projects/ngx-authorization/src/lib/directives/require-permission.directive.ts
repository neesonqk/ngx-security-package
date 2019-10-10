import { Directive, OnInit, Input, ElementRef, Inject } from '@angular/core';
import { Authorization } from '../../public-api';

@Directive({
    selector: '[require]'
})
export class RequirePermissionDirective implements OnInit {

    @Input('require')
    permission: string;

    constructor(private elementRef: ElementRef, @Inject('authService') private authService: Authorization) { }

    ngOnInit(): void {
        !this.authService.isPermit(this.permission) &&  (this.elementRef.nativeElement.style.display = 'none');
    }
}
