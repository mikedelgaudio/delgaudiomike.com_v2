import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkComponent } from "./work.component";
import { Router, RouterModule } from "@angular/router";
import { CardComponent } from "./card/card.component";
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
  declarations: [WorkComponent, CardComponent],
  imports: [RouterModule, CommonModule, SharedModule],
  exports: [WorkComponent],
})
export class WorkModule {}
