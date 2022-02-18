import { Directive, Output, EventEmitter, HostListener } from '@angular/core';
import { CarouselScrollEvent } from '../models/carousel-scroll-event.model';

@Directive({
  selector: '[carousel]'
})
export class CarouselDirective {

  @Output() scrolled = new EventEmitter<CarouselScrollEvent>();
 
  @HostListener('scroll', ['$event']) scrollMenu(event:any) 
  {
    const responseObject:CarouselScrollEvent = {
      leftScrollEnabled: false,
      rightScrollEnabled: false
    };

    if (event.target.scrollLeft > 0) 
    {
      responseObject.leftScrollEnabled = false;
    } 
    else 
    {
      responseObject.leftScrollEnabled = true;
    }

    if (Math.round(event.target.scrollLeft) >= (event.target.scrollWidth - event.target.clientWidth - 1)) 
    {
      responseObject.rightScrollEnabled = true;
    } 
    else 
    {
      responseObject.rightScrollEnabled = false;
    }

    this.scrolled.emit(responseObject);
  }
}