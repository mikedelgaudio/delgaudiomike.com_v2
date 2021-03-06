import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CallToActionButtonsComponent } from "./call-to-action-buttons/call-to-action-buttons.component";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ExperienceCardComponent } from "./experience-card/experience-card.component";

@NgModule({
  declarations: [CallToActionButtonsComponent, ProjectCardComponent, ExperienceCardComponent],
  imports: [CommonModule],
  exports: [CallToActionButtonsComponent, ProjectCardComponent, ExperienceCardComponent],
})
export class SharedModule {}
