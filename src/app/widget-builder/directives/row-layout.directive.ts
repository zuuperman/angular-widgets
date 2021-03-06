import {Directive, EventEmitter, Output, ViewContainerRef} from '@angular/core';

@Directive({
    selector: '[row-layout]',
})
export class RowLayoutDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
