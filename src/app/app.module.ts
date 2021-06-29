import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomePageModule } from "./home-page/home-page.module";
import { FooterComponent } from "./footer/footer.component";
import { AppErrorHandler } from "./errors/app-error-handler";
import { TypesOfErrorsModule } from "./errors/types-of-errors.module";
import { SharedModule } from "./shared/shared.module";
import { GoogleAnalyticsService } from "../app/google-analytics/google-analytics.service";

@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HomePageModule,
    AppRoutingModule,
    TypesOfErrorsModule,
    SharedModule,
  ],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }, GoogleAnalyticsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
