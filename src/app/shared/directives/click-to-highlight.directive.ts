import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickToHighlight]'
})
export class ClickToHighlightDirective {
  private previousColor: string | null = null;
  private isHighlighted: boolean = false;

  constructor(
    private element: ElementRef,
    private renderer: Renderer2) {
  }

  @Input()
  color: string = 'red';

  @HostListener("click")
  onClick() {
    let element = this.element.nativeElement;
    if (!this.isHighlighted)
    {
      this.previousColor = getComputedStyle(element).color;
      this.renderer.setStyle(element, "color", this.color);
    }
    else {
      this.renderer.setStyle(element, "color", this.previousColor);
    }

    this.isHighlighted = !this.isHighlighted;
  }
}
