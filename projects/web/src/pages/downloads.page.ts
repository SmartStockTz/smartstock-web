import {Component} from '@angular/core';
import {DeviceState} from '@smartstocktz/core-libs';

@Component({
  selector: 'app-pricing-page',
  template: `
    <app-layout-sidenav
      [body]="body"
      [heading]="'Downloads'"
      [showSearch]="false"
      [leftDrawerMode]="(deviceState.enoughWidth | async) === true?'side':'over'"
      [leftDrawerOpened]="(deviceState.enoughWidth | async) === true"
      [leftDrawer]="side">
      <ng-template #side>
        <app-mall-drawer [currentMenu]="'downloads'"></app-mall-drawer>
      </ng-template>
      <ng-template #body>
        <app-downloads></app-downloads>
      </ng-template>
    </app-layout-sidenav>
  `,
  styleUrls: []
})

export class DownloadsPage {
  constructor(public readonly deviceState: DeviceState) {
  }
}
