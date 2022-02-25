import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardModule } from './features/card/card.module';
import { CarouselModule } from './features/carousel/carousel.module';
import { HeaderModule } from './features/header/header.module';
import { MaterialModule } from './features/material/material.module';
import { ProductModule } from './features/product/product.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    MaterialModule,
    ProductModule,
    HttpClientModule,
    HeaderModule,
    CardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
