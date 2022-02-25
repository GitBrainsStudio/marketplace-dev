import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material/material.module';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselDirective } from './directives/carousel.directive';
import { ImageCarouselComponent } from './components/image-carousel/image-carousel.component';
import { CategoryCarouselComponent } from './components/category-carousel/category-carousel.component';
import { BrandCarouselComponent } from './components/brand-carousel/brand-carousel.component';
import { AdvantageCarouselComponent } from './components/advantage-carousel/advantage-carousel.component';

@NgModule({
  declarations: [
    CarouselComponent,
    CarouselDirective,
    ImageCarouselComponent,
    CategoryCarouselComponent,
    BrandCarouselComponent,
    AdvantageCarouselComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule
  ],
  exports: [
      CarouselComponent,
      CarouselDirective,
      ImageCarouselComponent,
      CategoryCarouselComponent,
      BrandCarouselComponent,
      AdvantageCarouselComponent
  ]
})
export class CarouselModule { }
