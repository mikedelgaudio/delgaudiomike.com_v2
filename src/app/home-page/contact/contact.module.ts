import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactComponent } from "./contact.component";
import { SharedModule } from "src/app/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [ContactComponent],
  imports: [CommonModule, SharedModule, ReactiveFormsModule],
  exports: [ContactComponent],
})
export class ContactModule {}
