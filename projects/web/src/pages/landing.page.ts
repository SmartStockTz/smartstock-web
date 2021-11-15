import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceState} from '@smartstocktz/core-libs';
import {MallState} from '../states/mall.state';

@Component({
  selector: 'app-landing',
  template: `
    <app-layout-sidenav
      [body]="body"
      searchPlaceholder="Search shop..."
      [showSearch]="true"
      (searchCallback)="searchShop($event)"
      [showProgress]="(mallState.loadMalls | async) === true"
      [leftDrawerMode]="(deviceState.enoughWidth | async) === true?'side':'over'"
      [leftDrawerOpened]="(deviceState.enoughWidth | async) === true"
      [rightDrawer]="filter"
      [showBottomBar]="false"
      [showModuleMenu]="true"
      [rightDrawerOpened]="(deviceState.enoughWidth | async) === true"
      [rightDrawerMode]="(deviceState.enoughWidth | async) === true?'side':'over'"
      [cartIcon]="'info_outline'"
      [leftDrawer]="side">
      <ng-template #filter>
        <app-mall-filters-drawer></app-mall-filters-drawer>
      </ng-template>
      <ng-template #side>
        <app-mall-drawer [currentMenu]="'mall'"></app-mall-drawer>
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
export class LandingPage implements OnInit, OnDestroy {

  constructor(public readonly deviceState: DeviceState,
              public readonly mallState: MallState) {
    document.title = 'SmartStock';
  }

  ngOnInit(): void {
  }

  searchShop(q: string): void {
    // console.log(q);
    this.mallState.searchShop(q);
  }

  ngOnDestroy(): void {
    this.mallState.malls.next([]);
    this.mallState.query.next('');
  }
}
