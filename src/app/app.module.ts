import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomePageModule } from "./home-page/home-page.module";
import { FooterComponent } from "./footer/footer.component";
import { CreativeWorkPageModule } from "./creative-work-page/creative-work-page.module";
import { AppErrorHandler } from "./errors/app-error-handler";
import { TypesOfErrorsModule } from "./errors/types-of-errors.module";
import { SharedModule } from "./shared/shared.module";
import { CodeProjectsPageModule } from "./code-projects-page/code-projects-page.module";
import { WorkExperiencePageModule } from "./work-experience-page/work-experience-page.module";
import { GoogleAnalyticsService } from "../app/google-analytics/google-analytics.service";

@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HomePageModule,
    CreativeWorkPageModule,
    WorkExperiencePageModule,
    AppRoutingModule,
    TypesOfErrorsModule,
    SharedModule,
    CodeProjectsPageModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }, GoogleAnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
