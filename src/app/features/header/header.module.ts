import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from '../carousel/carousel.module';
import { MaterialModule } from '../material/material.module';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CarouselModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
