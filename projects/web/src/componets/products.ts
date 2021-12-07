import {Component} from '@angular/core';
import {MallState} from '../states/mall.state';

@Component({
  selector: 'app-products',
  template: `
    <div infiniteScroll
         [infiniteScrollDistance]="5"
         [infiniteScrollThrottle]="50"
         [scrollWindow]="false"
         (scrolled)="onScroll()"
         class="products-container">
      <app-join-promotion></app-join-promotion>
      <ngx-masonry (layoutComplete)="donePopulate()" [ordered]="true" [options]="options">
        <app-product [product]="product" *ngFor="let product of mallState.products | async"></app-product>
      </ngx-masonry>
      <div *ngIf="showLoadMore" class="load-more">
        <button (click)="onScroll()"
                mat-button color="primary" *ngIf="(mallState.loadProducts  |async) === false">
          Load More
        </button>
        <mat-progress-spinner *ngIf="(mallState.loadProducts  | async) === true"
                              [diameter]="20"
                              color="primary"
                              mode="indeterminate">
        </mat-progress-spinner>
      </div>
    </div>
  `,
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
