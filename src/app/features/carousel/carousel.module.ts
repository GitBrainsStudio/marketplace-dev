import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselDirective } from './components/directives/carousel.directive';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselDirective
  ],
  imports: [
    BrowserModule
  ],
  exports: [
      CarouselComponent,
      CarouselDirective
  ]
})
export class CarouselModule { }
