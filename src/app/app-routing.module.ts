import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomePageComponent } from "./home-page/home-page.component";
import { CallToActionButtonsComponent } from "./call-to-action-buttons/call-to-action-buttons.component";

const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "test", component: CallToActionButtonsComponent },
  { path: "**", component: HomePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
