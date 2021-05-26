import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { CreativeWorkPageComponent } from "./creative-work-page/creative-work-page.component";
import { CodeProjectsPageComponent } from "./code-projects-page/code-projects-page.component";
import { WorkExperiencePageComponent } from "./work-experience-page/work-experience-page.component";
import { Error404Component } from "./errors/components/error404/error404.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "creative-work", component: CreativeWorkPageComponent },
  { path: "code-projects", component: CodeProjectsPageComponent },
  { path: "work-experience", component: WorkExperiencePageComponent },
  { path: "**", component: Error404Component },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: "enabled",
      initialNavigation: "enabled",
      anchorScrolling: "enabled",
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
