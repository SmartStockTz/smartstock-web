import {Component} from '@angular/core';

@Component({
  selector: 'app-free-pricing',
  template: `
    <div class="free-pricing-container">
      <div class="mall-container">
        <div class="mall-head">
          <span class="name">Free</span>
          <span style="flex: 1 1 auto"></span>
        </div>
        <hr class="line">
        <p class="about">
          This is best if you start a business it allow you to set your online shop quickly
        </p>
        <a>
          <span class="view-products-text">Features</span>
        </a>
        <div class="features-container">
          <div id="in">
            <div class="product-preview">
              <span class="preview-category">Stocks</span>
              <span class="preview-name">
              Add products and track stocks movements.
            </span>
            </div>
          </div>
          <div id="in">
            <div class="product-preview">
              <span class="preview-category">Online Shop</span>
              <span class="preview-name">
                    Set up your online shop and receive orders.
                </span>
            </div>
          </div>
          <div id="in">
            <div class="product-preview">
              <span class="preview-category">Customers</span>
              <span class="preview-name">
                    Manage your customers and customer reports.
                </span>
            </div>
          </div>
          <div id="in">
            <div class="product-preview">
              <span class="preview-category">Access</span>
              <span class="preview-name">
                    Access your shop anywhere.
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../styles/mall.style.scss', '../styles/pricing.style.scss']
})

export class FreePricingComponent {
  constructor() {
  }
}
