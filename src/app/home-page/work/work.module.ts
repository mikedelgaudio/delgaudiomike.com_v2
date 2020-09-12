import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkComponent } from "./work.component";
import { Router, RouterModule } from "@angular/router";

@NgModule({
  declarations: [WorkComponent],
  imports: [RouterModule, CommonModule],
  exports: [WorkComponent],
})
export class WorkModule {}
