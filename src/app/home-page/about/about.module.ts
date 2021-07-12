import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AboutComponent } from "./about.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [AboutComponent],
  imports: [CommonModule, SharedModule],
  exports: [AboutComponent],
})
export class AboutModule {}
