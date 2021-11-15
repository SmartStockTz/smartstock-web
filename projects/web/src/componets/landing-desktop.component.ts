import {Component, OnInit} from '@angular/core';
import {UserService} from '@smartstocktz/core-libs';
import {MallState} from '../states/mall.state';

@Component({
  selector: 'app-landing-desktop',
  template: `
    <div class="land-container"
         infinite-scroll
         [scrollWindow]="false"
         [infiniteScrollDistance]="1"
         [infiniteScrollThrottle]="100"
         (scrolled)="onScroll()">
      <app-join-promotion class="land-container-item" *ngIf="showPromo"></app-join-promotion>
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

export class LandingDesktopComponent implements OnInit {
  showPromo = false;

  constructor(public readonly userService: UserService,
              public readonly mallState: MallState) {
  }

  ngOnInit(): void {
    this.userService.currentUser().then(value => {
      this.showPromo = !(value && value.id);
    });
  }

  onScroll(): void {
    // console.log('scrolled');
    this.mallState.fetchMoreMalls(20);
  }
}
