import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProjectCardComponent } from "./project-card/project-card.component";
import { ExperienceCardComponent } from "./experience-card/experience-card.component";
import { EnterTheViewportNotifierDirective } from "./enter-viewport.directive";

@NgModule({
  declarations: [ProjectCardComponent, ExperienceCardComponent, EnterTheViewportNotifierDirective],
  imports: [CommonModule],
  exports: [ProjectCardComponent, ExperienceCardComponent, EnterTheViewportNotifierDirective],
})
export class SharedModule {}
