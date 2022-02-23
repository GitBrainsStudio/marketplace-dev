import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselDirective } from './directives/carousel.directive';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselDirective,
    ImageCarouselComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  exports: [
      CarouselComponent,
      CarouselDirective,
      ImageCarouselComponent
  ]
})
export class CarouselModule { }
