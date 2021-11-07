import {Component} from '@angular/core';
import {DeviceState} from '@smartstocktz/core-libs';

@Component({
  selector: 'app-pricing-page',
  template: `
    <app-layout-sidenav
      [body]="body"
      [heading]="'Pricing'"
      [showSearch]="false"
      [leftDrawerMode]="(deviceState.enoughWidth | async) === true?'side':'over'"
      [leftDrawerOpened]="(deviceState.enoughWidth | async) === true"
      [leftDrawer]="side">
      <ng-template #side>
        <app-mall-drawer [currentMenu]="'pricing'"></app-mall-drawer>
      </ng-template>
      <ng-template #body>
        <app-pricing></app-pricing>
      </ng-template>
    </app-layout-sidenav>
  `,
  styleUrls: []
})

export class PricingPage {
  constructor(public readonly deviceState: DeviceState) {
  }
}
