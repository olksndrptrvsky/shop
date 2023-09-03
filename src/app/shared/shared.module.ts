import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ClickToHighlightDirective } from './directives/click-to-highlight.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HighlightDirective,
    ClickToHighlightDirective,
    OrderByPipe,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    HighlightDirective,
    ClickToHighlightDirective,
    OrderByPipe,
  ]
})
export class SharedModule { }
