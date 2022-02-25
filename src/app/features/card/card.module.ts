import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CategoryComponent } from './components/category/category.component';
import { BrandComponent } from './components/brand/brand.component';

@NgModule({
  declarations: [
    CategoryComponent,
    BrandComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    CategoryComponent,
    BrandComponent
  ]
})
export class CardModule { }
