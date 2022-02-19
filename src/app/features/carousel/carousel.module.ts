import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselDirective } from './directives/carousel.directive';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselDirective
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  exports: [
      CarouselComponent,
      CarouselDirective
  ]
})
export class CarouselModule { }
