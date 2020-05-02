import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { WorkComponent } from './work/work.component';
import { HomePageComponent } from './home-page.component';
import { WorkModule } from './work/work.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    WorkModule
  ],
  exports: [
  ]
})
export class HomePageModule { }
