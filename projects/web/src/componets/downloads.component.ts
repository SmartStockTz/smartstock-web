import {Component} from '@angular/core';

@Component({
  selector: 'app-downloads',
  template: `
    <div class="download-container">
      <app-desktop-downloads class="download-container-item"></app-desktop-downloads>
    </div>
  `,
  styleUrls: ['../styles/downloads.style.scss']
})

export class DownloadsComponent {
  constructor() {
  }
}
