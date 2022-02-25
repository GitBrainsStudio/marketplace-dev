import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from '../carousel/carousel.module';
import { MaterialModule } from '../material/material.module';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CarouselModule
  ],
  exports: [
    FooterComponent
  ]
})
export class FooterModule { }
