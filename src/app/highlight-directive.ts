import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[appHighlight]'
})

export class HighlightDirective {
    constructor(private eleRef: ElementRef) {
        // eleRef.nativeElement.style.background = 'red';
    }

    @HostListener('mouseover') onMouseOver() {
    this.eleRef.nativeElement.style.background = 'pink';

    this.eleRef.nativeElement.style.cursor = 'pointer';
    }

    @HostListener('mouseout') onMouseOut() {
    this.eleRef.nativeElement.style.background = 'transparent';
    }
}