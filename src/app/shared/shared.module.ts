import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CallToActionButtonsComponent } from "./call-to-action-buttons/call-to-action-buttons.component";

@NgModule({
  declarations: [CallToActionButtonsComponent],
  imports: [CommonModule],
  exports: [CallToActionButtonsComponent],
})
export class SharedModule {}
