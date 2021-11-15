import {Component} from '@angular/core';
import {DeviceState} from '@smartstocktz/core-libs';

@Component({
  selector: 'app-pricing-page',
  template: `
    <app-layout-sidenav
      [body]="body"
      [heading]="'About'"
      [showSearch]="false"
      [showBottomBar]="false"
      [showModuleMenu]="true"
      [leftDrawerMode]="(deviceState.enoughWidth | async) === true?'side':'over'"
      [leftDrawerOpened]="(deviceState.enoughWidth | async) === true"
      [leftDrawer]="side">
      <ng-template #side>
        <app-mall-drawer [currentMenu]="'about'"></app-mall-drawer>
      </ng-template>
      <ng-template #body></ng-template>
    </app-layout-sidenav>
  `,
  styleUrls: []
})

export class AboutPage {
  constructor(public readonly deviceState: DeviceState) {
  }
}
