import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { ResumePageComponent } from "./resume-page/resume-page.component";
import { CreativeWorkPageComponent } from './creative-work-page/creative-work-page.component';

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "resume", component: ResumePageComponent },
  { path: "creative-work", component: CreativeWorkPageComponent},
  { path: "**", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
