import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({ selector: '[range]' })
export class RangeDirective {
    currentRange: number[];

    constructor(
        private templateRef: TemplateRef<any>,
        private viewContainerRef: ViewContainerRef
    ) { }

    @Input()
    set range(value) {
        this.viewContainerRef.clear();
        this.currentRange = this.generateRange(value[0], value[1]);

        this.currentRange.forEach(num => {
            this.viewContainerRef.createEmbeddedView(this.templateRef, {
                $implicit: num
            });
        })
    }

    generateRange(from, to) {
        return Array.from((function* (x, y) {
            while (x <= y) { yield x++; }
        })(from, to));
    }
}
