import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CarouselScrollEvent } from '../../models/carousel-scroll-event.model';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {

  @Input() linkLabel = 'link';
  @Input() background: string = ''
  @Input() text: string = '';
  @Input() hideNav = false;
  @Input() navIcon: any;
  @Input() distance = 300;
  @Input() scrollSpeed = 100;

  leftArrowHide = true;
  rightArrow = false;

  @ViewChild('scrollWrapper', { static: false }) scrollWrapper: ElementRef | undefined;

  interval: any;

  constructor() {
  }

  ngOnInit(): void {
    setTimeout(() => {
      if (this.scrollWrapper!.nativeElement.scrollWidth <= this.scrollWrapper!.nativeElement.clientWidth) {
        this.leftArrowHide = true;
        this.rightArrow = true;
      }
    }, 100);
  }

  listenToItemsScroll(e:CarouselScrollEvent): void {
    this.leftArrowHide = e.leftScrollEnabled;
    this.rightArrow = e.rightScrollEnabled;
  }

  scrollLeft(): void {
    const listWrapper = this.scrollWrapper?.nativeElement;
    const scrollLeft = listWrapper!.scrollLeft;
    const distance = scrollLeft - this.distance;
    this.scroll(distance);
  }

  left(): void {
    const d = this;
    this.interval = setInterval(() => { d.scrollLeft(); }, this.scrollSpeed);
  }

  scrollRight(): void {
    const listWrapper = this.scrollWrapper?.nativeElement;
    const scrollLeft = listWrapper!.scrollLeft;
    const distance = scrollLeft + this.distance;
    this.scroll(distance);
  }

  right(): void {
    const d = this;
    this.interval = setInterval(() => { d.scrollRight(); }, this.scrollSpeed);
  }

  scroll(distance:any): void {
    const listWrapper = this.scrollWrapper?.nativeElement;
    listWrapper!.scrollTo({ behavior: 'smooth', left: distance });
  }

  clear(): void {
    clearInterval(this.interval);
  }

}
