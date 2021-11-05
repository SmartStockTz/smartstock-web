import {Component} from '@angular/core';

@Component({
  selector: 'app-mall-drawer',
  template: `
    <div class="drawer">
      <mat-toolbar class="brand">
        <img class="logo" src="assets/img/sslogo.png">
        <span class="logo-text">SmartStock</span>
      </mat-toolbar>
      <p class="menu-title">Menu</p>
      <button mat-button class="menu-selected">
        <mat-icon color="primary">shopping_cart</mat-icon>
        <span class="menu-text">Shopping Mall</span>
      </button>
      <button mat-button class="menu-not-selected">
        <mat-icon color="primary">business</mat-icon>
        <span class="menu-text">Your Shops</span>
      </button>
      <button mat-button class="menu-not-selected">
        <mat-icon color="primary">money</mat-icon>
        <span class="menu-text">Pricing</span>
      </button>
      <button mat-button class="menu-not-selected">
        <mat-icon color="primary">widgets</mat-icon>
        <span class="menu-text">Features</span>
      </button>
      <button mat-button class="menu-not-selected">
        <mat-icon color="primary">get_app</mat-icon>
        <span class="menu-text">Downloads</span>
      </button>
      <button mat-button class="menu-not-selected">
        <mat-icon color="primary">security</mat-icon>
        <span class="menu-text">Privacy</span>
      </button>
      <button mat-button class="menu-not-selected">
        <mat-icon color="primary">info</mat-icon>
        <span class="menu-text">About</span>
      </button>
    </div>
  `,
  styleUrls: ['../styles/mall-drawer.style.scss']
})

export class MallDrawerComponent {
  constructor() {
  }
}
