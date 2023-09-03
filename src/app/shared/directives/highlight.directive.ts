import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  
  constructor() {
  }

  @HostBinding("style.color")
  backgroundColor!: string; 

  @HostListener("pointerenter")  
  onMouseEnter(): void {
    this.backgroundColor = 'yellow';
  }

  @HostListener("pointerleave")
  onMouseLeave(): void {
    this.backgroundColor = '';
  }
}
