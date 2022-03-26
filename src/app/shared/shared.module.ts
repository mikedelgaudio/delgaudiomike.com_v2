import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterTheViewportNotifierDirective } from './enter-viewport.directive';
import { SpacerComponent } from './spacer/spacer.component';

@NgModule({
  declarations: [EnterTheViewportNotifierDirective, SpacerComponent],
  imports: [CommonModule],
  exports: [EnterTheViewportNotifierDirective, SpacerComponent],
})
export class SharedModule {}
