import { Component } from '@angular/core';
import { CarouselImage } from './features/carousel/models/carousel-image.model';
import { IconService } from './features/icon/services/icon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Marketplace';

  constructor(private iconService: IconService) {
    this.iconService.init();
  }

  images:CarouselImage[] = [
    {
      uri: 'https://cms.mvideo.ru/magnoliaPublic/dam/jcr:343ea473-449e-4800-adaf-1866433950a2'
    },
    {
      uri: 'https://cms.mvideo.ru/magnoliaPublic/dam/jcr:ef9f8577-2336-4879-a8d9-65d4fc5b34b7'
    },
    {
      uri: 'https://cms.mvideo.ru/magnoliaPublic/dam/jcr:4f75f103-1d7d-4117-9338-0354953261ef'
    }
  ]
}
