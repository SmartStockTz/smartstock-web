import {Component, Input, OnInit} from '@angular/core';
import {UserService} from '@smartstocktz/core-libs';

@Component({
  selector: 'app-mall-drawer',
  template: `
    <div class="drawer">
      <mat-toolbar class="brand">
        <img class="logo" src="assets/img/sslogo.png">
        <span class="logo-text">SmartStock</span>
      </mat-toolbar>
      <p class="menu-title">Menu</p>
      <button routerLink="/" mat-button [class]="currentMenu==='mall'?'menu-selected':'menu-not-selected'">
        <mat-icon color="primary">shopping_cart</mat-icon>
        <span class="menu-text">Shopping Mall</span>
      </button>
      <button routerLink="/account/shop" *ngIf="logIn" mat-button
              [class]="currentMenu==='shops'?'menu-selected':'menu-not-selected'">
        <mat-icon color="primary">business</mat-icon>
        <span class="menu-text">Your Shops</span>
      </button>
      <button routerLink="/pricing" mat-button [class]="currentMenu==='pricing'?'menu-selected':'menu-not-selected'">
        <mat-icon color="primary">money</mat-icon>
        <span class="menu-text">Pricing</span>
      </button>
<!--      <button routerLink="/features" mat-button [class]="currentMenu==='features'?'menu-selected':'menu-not-selected'">-->
<!--        <mat-icon color="primary">widgets</mat-icon>-->
<!--        <span class="menu-text">Features</span>-->
<!--      </button>-->
      <button routerLink="/downloads" mat-button
              [class]="currentMenu==='downloads'?'menu-selected':'menu-not-selected'">
        <mat-icon color="primary">get_app</mat-icon>
        <span class="menu-text">Downloads</span>
      </button>
      <button routerLink="/privacy" mat-button [class]="currentMenu==='privacy'?'menu-selected':'menu-not-selected'">
        <mat-icon color="primary">security</mat-icon>
        <span class="menu-text">Privacy</span>
      </button>
<!--      <button routerLink="/about" mat-button [class]="currentMenu==='about'?'menu-selected':'menu-not-selected'">-->
<!--        <mat-icon color="primary">info</mat-icon>-->
<!--        <span class="menu-text">About</span>-->
<!--      </button>-->
    </div>
  `,
  styleUrls: ['../styles/mall-drawer.style.scss']
})

export class MallDrawerComponent implements OnInit {
  logIn = false;
  @Input() currentMenu = '';

  constructor(private readonly userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.currentUser().then(value => {
      setTimeout(() => {
        this.logIn = !!(value && value.id);
      }, 100);
    });
  }
}
