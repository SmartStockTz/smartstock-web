import {Component} from '@angular/core';

@Component({
  selector: 'app-mall-filters-drawer',
  template: `
    <div class="filter-drawer">
      <mat-toolbar class="filter-container">
        <span class="logo-text"></span>
      </mat-toolbar>
    </div>
  `,
  styleUrls: ['../styles/mall-filter.style.scss']
})

export class MallFiltersDrawerComponent {
  constructor() {
  }
}
