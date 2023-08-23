import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  
  constructor() {
    console.log("ctor");
  }

  @HostBinding("style.color")
  backgroundColor!: string; 

  @HostListener("pointerenter")  
  onMouseEnter(): void {
    console.log("pointerenter");
    this.backgroundColor = 'yellow';
  }

  @HostListener("pointerleave")
  onMouseLeave(): void {
    console.log("pointerleave");
    this.backgroundColor = '';
  }
}
