import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterTheViewportNotifierDirective } from './enter-viewport.directive';

@NgModule({
  declarations: [EnterTheViewportNotifierDirective],
  imports: [CommonModule],
  exports: [EnterTheViewportNotifierDirective],
})
export class SharedModule {}
