import {Component, OnDestroy, OnInit} from '@angular/core';
import {DeviceState} from '@smartstocktz/core-libs';
import {MallState} from '../states/mall.state';

@Component({
  selector: 'app-products-page',
  template: `
    <app-layout-sidenav
      [body]="body"
      searchPlaceholder="Search product..."
      [color]="'white'"
      heading="Mall - Products"
      [showSearch]="true"
      [searchProgressFlag]="mallState.loadProducts | async"
      (searchCallback)="searchProduct($event)"
      [showProgress]="(mallState.loadMalls | async) === true"
      [leftDrawerMode]="'over'"
      [leftDrawerOpened]="false"
      [showBottomBar]="false"
      [showModuleMenu]="true"
      [cartIcon]="'info_outline'"
      [leftDrawer]="side">
      <ng-template #side>
        <app-mall-drawer [currentMenu]="'mall'"></app-mall-drawer>
      </ng-template>
      <ng-template #body>
        <app-products></app-products>
      </ng-template>
    </app-layout-sidenav>
  `,
  styleUrls: ['../styles/landing.style.scss', '../styles/footer.style.scss']
})
export class ProductsPage implements OnInit, OnDestroy {

  constructor(public readonly deviceState: DeviceState,
              public readonly mallState: MallState) {
    document.title = 'SmartStock - Products';
  }

  ngOnInit(): void {
    this.mallState.fetchProducts(20, 0);
  }

  searchProduct(q: string): void {
    this.mallState.searchProduct(q);
  }

  ngOnDestroy(): void {
    this.mallState.dispose();
  }
}
