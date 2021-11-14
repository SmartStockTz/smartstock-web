import {Component} from '@angular/core';

@Component({
  selector: 'app-pricing',
  template: `
    <div class="pricing-container">
      <app-free-pricing class="pricing-container-item"></app-free-pricing>
      <app-paid-pricing class="pricing-container-item"></app-paid-pricing>
    </div>
  `,
  styleUrls: ['../styles/pricing.style.scss']
})

export class PricingComponent {
  constructor() {
  }
}
