import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { SharedModule } from "src/app/shared/shared.module";
@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SharedModule],
  exports: [ContactComponent],
})
export class ContactModule {}
