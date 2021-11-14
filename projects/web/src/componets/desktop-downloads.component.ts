import {Component} from '@angular/core';

@Component({
  selector: 'app-desktop-downloads',
  template: `
    <div class="pricing-container">
      <div class="mall-container">
        <div class="mall-head">
          <span class="name">Desktop</span>
          <span style="flex: 1 1 auto"></span>
        </div>
        <hr class="line">
        <p class="about">
          Get better experience enjoy SmartStock in desktop.
        </p>
        <a>
          <span class="view-products-text">Links</span>
        </a>
        <div class="features-container">
          <a href="https://smartstock-faas.bfast.fahamutech.com/downloads/win" target="_blank" class="link-container">
            <img src="/assets/img/microsoft_download.png" alt="Window">
          </a>
          <a href="https://snapcraft.io/smartstock" target="_blank" class="link-container">
            <img src="/assets/img/snap_download.png" alt="Linux">
          </a>
          <a href="https://smartstock-faas.bfast.fahamutech.com/downloads/mac" target="_blank" class="link-container">
            <img src="/assets/img/ios_download.png" alt="Mac">
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../styles/mall.style.scss', '../styles/pricing.style.scss', '../styles/desktop-downloads.style.scss']
})

export class DesktopDownloadsComponent {
  // winLogo = require('./microsoft_download.png');
  constructor() {
  }
}
