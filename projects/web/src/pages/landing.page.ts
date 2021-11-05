import {Component, OnInit} from '@angular/core';
import {DeviceState} from '@smartstocktz/core-libs';

@Component({
  selector: 'app-landing',
  template: `
    <app-layout-sidenav
      [body]="body"
      searchPlaceholder="Search shop or product..."
      [showSearch]="true"
      [leftDrawerMode]="(deviceState.enoughWidth | async) === true?'side':'over'"
      [leftDrawerOpened]="(deviceState.enoughWidth | async) === true"
      [rightDrawer]="filter"
      [rightDrawerOpened]="(deviceState.enoughWidth | async) === true"
      [rightDrawerMode]="(deviceState.enoughWidth | async) === true?'side':'over'"
      [cartIcon]="'filter_alt'"
      [leftDrawer]="side">
      <ng-template #filter>
        <app-mall-filters-drawer></app-mall-filters-drawer>
      </ng-template>
      <ng-template #side>
        <app-mall-drawer></app-mall-drawer>
      </ng-template>
      <ng-template #body>
        <app-landing-desktop></app-landing-desktop>
      </ng-template>
    </app-layout-sidenav>
    <!--    <div class="bg-white w-100 p-0 m-0">-->
    <!--      <div id="footer" class="container">-->
    <!--        <app-footer></app-footer>-->
    <!--      </div>-->
    <!--    </div>-->
  `,
  styleUrls: ['../styles/landing.style.scss', '../styles/footer.style.scss']
})
export class LandingPage implements OnInit {

  constructor(public readonly deviceState: DeviceState) {
    document.title = 'SmartStock';
  }

  ngOnInit(): void {
  }
}
