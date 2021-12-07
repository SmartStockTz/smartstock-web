import {Component, OnInit} from '@angular/core';
import {UserService} from '@smartstocktz/core-libs';
import {MallState} from '../states/mall.state';

@Component({
  selector: 'app-landing-desktop',
  template: `
    <div class="land-container"
         infinite-scroll
         [scrollWindow]="false"
         [infiniteScrollDistance]="2"
         [infiniteScrollThrottle]="100"
         (scrolled)="onScroll()">
      <app-join-promotion style="padding: 0 16px;" class="land-container-item"></app-join-promotion>
      <app-malls class="land-container-item"></app-malls>

      <div class="land-container-item"
           style="display: flex; justify-content: center; align-items: center">
        <button (click)="onScroll()"
                mat-button color="primary" *ngIf="(mallState.loadMoreMalls  |async) === false">
          Load More
        </button>
        <mat-progress-spinner *ngIf="(mallState.loadMoreMalls  | async) === true"
                              [diameter]="20"
                              color="primary"
                              mode="indeterminate">
        </mat-progress-spinner>
      </div>
    </div>
  `,
  styleUrls: ['../styles/landing-desktop.style.scss']
})

export class Shops implements OnInit {

  constructor(public readonly mallState: MallState) {
  }

  ngOnInit(): void {
  }

  onScroll(): void {
    // console.log('scrolled');
    this.mallState.fetchMoreMalls(20);
  }
}
