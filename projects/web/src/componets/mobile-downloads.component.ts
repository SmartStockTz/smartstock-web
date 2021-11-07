import {Component} from '@angular/core';

@Component({
  selector: 'app-mobile-downloads',
  template: `
    <div class="pricing-container">
      <div class="mall-container">
        <div class="mall-head">
          <span class="name">Mobile</span>
          <span style="flex: 1 1 auto"></span>
        </div>
        <hr class="line">
        <p class="about">
          Get better experience enjoy SmartStock in mobile.
        </p>
        <a>
          <span class="view-products-text">Links</span>
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
          <div id="in">
            <div class="product-preview">
              <span class="preview-category">Sales</span>
              <span class="preview-name">
                    Do sales on the POS module.
                </span>
            </div>
          </div>
          <div id="in">
            <div class="product-preview">
              <span class="preview-category">Reports</span>
              <span class="preview-name">
                    Get insight and reports for your business.
                </span>
            </div>
          </div>
          <div id="in">
            <div class="product-preview">
              <span class="preview-category">Purchases</span>
              <span class="preview-name">
                    Manage credit and cash purchase.
                </span>
            </div>
          </div>
          <div id="in">
            <div class="product-preview">
              <span class="preview-category">Expenses</span>
              <span class="preview-name">
                    Manage your business expenditure.
                </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../styles/mall.style.scss', '../styles/pricing.style.scss']
})

export class MobileDownloadsComponent {
  constructor() {
  }
}
