import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickToHighlightDirective } from './directives/click-to-highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    ClickToHighlightDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HighlightDirective,
    ClickToHighlightDirective,
  ]
})
export class SharedModule { }
