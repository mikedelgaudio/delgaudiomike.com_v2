import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ExperienceCardComponent } from "./experience-card/experience-card.component";

@NgModule({
  declarations: [ProjectCardComponent, ExperienceCardComponent],
  imports: [CommonModule],
  exports: [ProjectCardComponent, ExperienceCardComponent],
})
export class SharedModule {}
