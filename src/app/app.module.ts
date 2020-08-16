import { BrowserModule } from "@angular/platform-browser";
import { NgModule, ErrorHandler } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { HomePageModule } from "./home-page/home-page.module";
import { FooterComponent } from "./footer/footer.component";
import { CallToActionButtonsComponent } from "./call-to-action-buttons/call-to-action-buttons.component";
import { CreativeWorkPageModule } from "./creative-work-page/creative-work-page.module";
import { AppErrorHandler } from "./errors/app-error-handler";
import { TypesOfErrorsModule } from "./errors/types-of-errors.module";

@NgModule({
  declarations: [AppComponent, NavigationComponent, FooterComponent, CallToActionButtonsComponent],
  imports: [BrowserModule, HomePageModule, CreativeWorkPageModule, AppRoutingModule, TypesOfErrorsModule],
  providers: [{ provide: ErrorHandler, useClass: AppErrorHandler }],
  bootstrap: [AppComponent],
})
export class AppModule {}
