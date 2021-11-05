import {Component} from '@angular/core';

@Component({
  selector: 'app-join-promotion',
  template: `
    <div class="promotion-container">
      <p class="p-text">
        View sales remotely, track stocks and start selling online and grow your business.
        Join SmartStock today for free.
      </p>
      <div class="actions">
        <button routerLink="/account/login" color="primary" mat-button>JOIN NOW</button>
      </div>
    </div>
  `,
  styleUrls: ['../styles/join-promotion.style.scss']
})
export class JoinPromotionComponent {
  constructor() {
  }
}
