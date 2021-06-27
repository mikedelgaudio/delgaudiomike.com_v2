import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { WorkComponent } from "./work.component";
import { Router, RouterModule } from "@angular/router";
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [WorkComponent, CardComponent],
  imports: [RouterModule, CommonModule],
  exports: [WorkComponent],
})
export class WorkModule {}
