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
        <button routerLink="/account/register" color="primary" mat-button>REGISTER NOW</button>
        <button routerLink="/account/login" color="primary" mat-button>LOGIN</button>
      </div>
    </div>
  `,
  styleUrls: ['../styles/join-promotion.style.scss']
})
export class JoinPromotionComponent {
  constructor() {
  }
}
