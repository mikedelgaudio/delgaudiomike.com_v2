import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkExperiencePageComponent } from "./work-experience-page.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [WorkExperiencePageComponent],
  imports: [CommonModule, SharedModule],
  exports: [WorkExperiencePageComponent],
})
export class WorkExperiencePageModule {}
