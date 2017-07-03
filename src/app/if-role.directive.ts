import { Directive, TemplateRef, ViewContainerRef, Input, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/takeUntil';

@Directive({ selector: '[ifRole]' })
export class IfRoleDirective implements OnInit, OnDestroy {
    user$: Subscription;

    @Input('ifRole') ifRole: string;

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef,
        private authService: AuthService
    ) { }

    ngOnInit() {
        this.user$ = this.authService.user
            .do(() => this.viewContainerRef.clear())
            .filter(user => user.role === this.ifRole)
            .subscribe(() => {
                this.viewContainerRef.createEmbeddedView(this.templateRef);
            });
    }

    ngOnDestroy() {
        this.user$.unsubscribe();
    }
}
