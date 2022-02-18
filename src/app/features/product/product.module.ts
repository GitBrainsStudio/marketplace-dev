import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
      ProductCardComponent
  ]
})
export class ProductModule { }
