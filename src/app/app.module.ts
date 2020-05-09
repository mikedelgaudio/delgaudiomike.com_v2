import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomePageModule } from "./home-page/home-page.module";
import { FooterComponent } from "./footer/footer.component";
import { CallToActionButtonsComponent } from "./call-to-action-buttons/call-to-action-buttons.component";
import { ResumeModule } from "./resume-page/resume-page.module";

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    CallToActionButtonsComponent,
  ],
  imports: [BrowserModule, HomePageModule, ResumeModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
