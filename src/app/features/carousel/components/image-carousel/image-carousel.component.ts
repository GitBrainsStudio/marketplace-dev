import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CarouselImage } from '../../models/carouse-image.model';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.scss']
})
export class ImageCarouselComponent implements OnInit {

  @Input() images:CarouselImage[] | null = null;
  currentIndex:number = 0;
  imageScrolling:boolean = false;

  get endIndex()
  {
    if (this.images)
    {
      return this.images.length - 1
    }
    else
    {
      return 0;
    }
  }

  constructor() {}

  ngOnInit(): void {
  }

  scrollLeft()
  {
    this.imageScrolling = true;

    if (this.currentIndex != 0)
    {
      this.currentIndex -= 1;
    }
    else
    {
      this.currentIndex = this.endIndex;
    }
    this.imageScrolling = false;
  }

  scrollRight()
  {
    this.imageScrolling = true;

    if (this.currentIndex != this.endIndex)
    {
      this.currentIndex += 1;
    }
    else
    {
      this.currentIndex = 0;
    }

    this.imageScrolling = false;
  }
}
