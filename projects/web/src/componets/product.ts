import {Component, Input} from '@angular/core';
import {MallProduct} from '../models/mall-product';

@Component({
  selector: 'app-product',
  template: `
    <div ngxMasonryItem class="product-item"
         routerLink="/shops/{{product.shop.projectId}}" [queryParams]="{product:product.product}">
      <img *ngIf="!noImage" (error)="hideImage()" [src]="product.images[0]" alt="{{product.product}}"/>
      <div [class]="!noImage?'product-item-detail':'product-item-detail-no-image'">
        <p [style]="noImage?{color: '#f5f5f5'}:{}" class="product-item-detail-category">{{product.product}}</p>
        <p [style]="noImage?{color: 'white'}:{}"
           class="product-item-detail-price">{{product.retailPrice | currency: 'TZS '}}</p>
      </div>
      <a routerLink="/shops/{{product.shop.projectId}}" [queryParams]="{product:product.product}"
         class="product-item-detail-link">
        by {{product.shop.businessName}}
      </a>
    </div>
  `,
  styleUrls: ['../styles/product.scss']
})
export class Product {
  @Input() product: MallProduct;
  noImage = false;

  constructor() {
  }

  hideImage(): void {
    this.noImage = true;
  }
}
