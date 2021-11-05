import {Component, OnInit} from '@angular/core';
import {MallState} from '../states/mall.state';

@Component({
  selector: 'app-malls',
  template: `
    <div class="malls-container">
      <p *ngIf="mallsState.loadMalls | async">Loading...</p>
      <app-mall *ngFor="let mall of mallsState.malls | async" [mall]="mall"></app-mall>
    </div>
  `,
  styleUrls: ['../styles/malls.style.scss']
})

export class MallsComponent implements OnInit {
  constructor(public readonly mallsState: MallState) {
  }

  ngOnInit(): void {
    this.mallsState.fetchMalls(20, 0);
  }
}
