import {Component} from '@angular/core';
import {MallState} from '../states/mall.state';

@Component({
  selector: 'app-products',
  templateUrl: './products.html',
  styleUrls: ['../styles/product.scss']
})

export class Products {
  options = {
    fitWidth: true
  };
  showLoadMore = false;

  constructor(public readonly mallState: MallState) {
  }

  onScroll(): void {
    console.log('scrolled');
    this.mallState.fetchProductsMalls(20);
  }

  donePopulate(): void {
    this.showLoadMore = true;
  }
}
