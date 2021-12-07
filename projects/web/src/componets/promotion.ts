import {Component, OnInit} from '@angular/core';
import {UserService} from '@smartstocktz/core-libs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-join-promotion',
  template: `
    <div class="promotion-container">
      <p class="promo-title">
        Manage
      </p>
      <p class="promo-text">
        Sales, Purchase, Stocks Online.
      </p>
      <div *ngIf="showPromo">
        <button routerLink="/account/login" mat-button class="promo-button">
          <span>Login</span>
        </button>
        <button routerLink="/account/register" mat-button class="promo-button">
          <span>Register</span>
        </button>
      </div>
      <div class="promo-shops">
        <div (click)="setActiveShop(shop)" *ngFor="let shop of shops">
          <button mat-button class="promo-button">
            <span>{{shop.businessName}}</span>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['../styles/join-promotion.style.scss']
})
export class Promotion implements OnInit {
  showPromo = false;
  shops = [];

  constructor(private readonly userService: UserService,
              private readonly router: Router) {
  }

  ngOnInit(): void {
    this.userService.currentUser().then(async value => {
      if (!value) {
        this.showPromo = true;
        return [];
      }
      return this.userService.getShops(value);
    }).then(shops => {
      this.shops = shops;
    }).catch(_34 => {
      this.showPromo = true;
    });
  }

  async setActiveShop(shop: any): Promise<void> {
    await this.userService.saveCurrentShop(shop);
    this.router.navigateByUrl('/dashboard').catch(console.log);
  }
}
