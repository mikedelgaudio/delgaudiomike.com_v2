import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CodeProjectsPageComponent } from "./code-projects-page.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [CodeProjectsPageComponent],
  imports: [CommonModule, SharedModule],
})
export class CodeProjectsPageModule {}
