import {Component, Input} from '@angular/core';
import {MallProduct} from '../models/mall-product';

@Component({
  selector: 'app-product',
  templateUrl: './product.html',
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
