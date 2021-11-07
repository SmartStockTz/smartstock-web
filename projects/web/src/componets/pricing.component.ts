import {Component} from '@angular/core';

@Component({
  selector: 'app-pricing',
  template: `
    <div style="background: #F5F5F5; min-height: 100vh">
      <app-free-pricing></app-free-pricing>
      <app-paid-pricing></app-paid-pricing>
    </div>
  `,
  styleUrls: ['../styles/mall.style.scss', '../styles/malls.style.scss', '../styles/pricing.style.scss']
})

export class PricingComponent {
  constructor() {
  }
}
