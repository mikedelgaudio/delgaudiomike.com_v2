import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { WorkModule } from './work/work.module';
import { HeaderModule } from './header/header.module';


@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    WorkModule,
    HeaderModule
  ],
  exports: [
  ]
})
export class HomePageModule { }
