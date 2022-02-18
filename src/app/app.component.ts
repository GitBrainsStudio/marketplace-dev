import { Component } from '@angular/core';
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
}
