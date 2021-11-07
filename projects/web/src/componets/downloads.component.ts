import {Component} from '@angular/core';

@Component({
  selector: 'app-downloads',
  template: `
    <div style="background: #F5F5F5; min-height: 100vh">
      <app-desktop-downloads></app-desktop-downloads>
    </div>
  `,
  styleUrls: ['../styles/mall.style.scss', '../styles/malls.style.scss', '../styles/pricing.style.scss']
})

export class DownloadsComponent {
  constructor() {
  }
}
