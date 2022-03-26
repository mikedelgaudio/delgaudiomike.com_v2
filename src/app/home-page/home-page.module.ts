import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page.component';
import { WorkModule } from './work/work.module';
import { HeaderModule } from './header/header.module';
import { AboutModule } from './about/about.module';
import { ContactModule } from './contact/contact.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, ContactModule, AboutModule, WorkModule, HeaderModule, SharedModule],
  exports: [],
})
export class HomePageModule {}
