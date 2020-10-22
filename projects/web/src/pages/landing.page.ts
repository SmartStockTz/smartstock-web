import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'smartstock-landing',
  template: `
    <nav style="top: 0; z-index: 10000" class="navbar position-sticky navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="">
        SmartStock
      </a>

      <!--  <button class="navbar-toggler" type="button"-->
      <!--          data-toggle="collapse"-->
      <!--          data-target="#navbarSupportedContent"-->
      <!--          aria-controls="navbarSupportedContent"-->
      <!--          aria-expanded="false"-->
      <!--          aria-label="Toggle navigation">-->
      <!--    <span class="navbar-toggler-icon"></span>-->
      <!--  </button>-->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#why-us">Why Us</a>
          </li>
          <!--      <li class="nav-item">-->
          <!--        <a class="nav-link" href="#testimonies">Testimonies</a>-->
          <!--      </li>-->
          <li class="nav-item">
            <a class="nav-link" href="#pricing">Pricing</a>
          </li>
        </ul>
      </div>
      <span class="flex-grow-1"></span>
      <button routerLink="/account/login" class="btn btn-outline-success">Login</button>
      <span style="width: 10px; height: 10px"></span>
      <button routerLink="/account/register" class="btn btn-outline-success">Register</button>
    </nav>

    <section class="header d-flex flex-column">
      <div class="header-jumbo flex-grow-1 container d-flex align-items-start justify-content-center flex-column">
        <h4 class="">
          You can’t continue using papers <br> to keep records of your business.
        </h4>
        <p style="padding: 10px">Start your sales with us, today</p>
        <button mat-flat-button color="primary" routerLink="/account/register" class=" header-btn">Open Account For Free</button>
        <!--    <button style="font-size: 18px;" mat-button routerLink="/account/login" class="">Login To Your Shop</button>-->
      </div>

    </section>

    <section style="padding-top: 16px" class="why-smartstock" id="why-us">
      <div class="container">
        <h4>Why Smartstock?</h4>
        <mat-divider></mat-divider>
        <div class="row">
          <div class="col-md-3 text-center">
            <img src="/assets/img/everyWhere_icon.png">
            <h4>Work everywhere</h4>
            <p>
              You can access our system either by <b>desktop / laptop</b>, <b>mobile</b> or <b>web browser</b>
            </p>
          </div>
          <div class="col-md-3 text-center">
            <img src="/assets/img/“99.9%25”.png" width="50%" style="padding: 40px 10px">
            <h4>Always available</h4>
            <p>
              Due to internet connectivity challenge
              our service available offline and online
            </p>
          </div>
          <div class="col-md-3 text-center">
            <img src="/assets/img/customisable_icon.png">
            <h4>Customizable</h4>
            <p>Say how you want it to work for you
              and it will work the way you want</p>
          </div>
        </div>

        <div class="row">
          <div class="col-md-3 text-center">
            <img src="/assets/img/everyWhere_icon.png">
            <h4>Customer Engagement</h4>
            <p>
              Create your online shop for customer to make order and see your products.
            </p>
          </div>
          <div class="col-md-3 text-center">
            <img src="/assets/img/raws/“$”.svg" width="50%" style="padding: 19px 10px">
            <h4>Pay As You Use</h4>
            <p>
              Pay for what you use in a month, and not for packages.
            </p>
          </div>
          <div class="col-md-3 text-center">
            <img src="/assets/img/receipt.svg">
            <h4>Printer</h4>
            <p>
              Printer is integrated by default. Your customer deserve a receipt.
            </p>
          </div>
        </div>

      </div>
    </section>

    <section style="padding-top: 36px" id="pricing">
      <div class="container">
        <h4>Price Calculator</h4>
        <mat-divider></mat-divider>
        <div style="margin-top: 60px" class="container">
      <span>
        We understand price is a sensitive issue for business.
        <br>
        You will pay for what you use only no hidden payment or adds on cost.
        The maximum payment you will pay is <b>TZS 150,000 ( $65 )</b> and the minimum payment you will pay is <b>TZS 17,000 ( $7 )</b>
      </span>
          <div style="" class="row">
            <div
              class="col-12 col-sm-12 col-md-8 col-lg-6 col-xl-8 box-shadow d-flex flex-column align-items-start justify-content-center">
              <div class="btn-block">
                <mat-card-subtitle>Total Products</mat-card-subtitle>
                <div class="btn-block d-flex flex-row flex-nowrap">
                  <mat-slider thumbLabel
                              class="flex-grow-1"
                              [displayWith]="formatLabel"
                              [(ngModel)]="totalProducts"
                              color="primary"
                              [tickInterval]="1"
                              min="1" max="10000"
                              step="1">
                  </mat-slider>
                  <input class="pricing-input" [(ngModel)]="totalProducts" type="number" min="1">
                </div>

                <mat-card-subtitle>Total Items You Sale Per month</mat-card-subtitle>
                <div class="btn-block d-flex flex-row flex-nowrap">
                  <mat-slider thumbLabel
                              class="flex-grow-1"
                              [displayWith]="formatLabel"
                              [(ngModel)]="totalSales"
                              color="primary"
                              [tickInterval]="1"
                              min="1" max="10000"
                              step="1">
                  </mat-slider>
                  <input [(ngModel)]="totalSales" class="pricing-input" type="number" min="1">
                </div>

                <mat-card-subtitle>Total Items You Purchase Per month</mat-card-subtitle>
                <div class="btn-block d-flex flex-row flex-nowrap">
                  <mat-slider thumbLabel
                              class="flex-grow-1"
                              [displayWith]="formatLabel"
                              [(ngModel)]="totalPurchases"
                              color="primary"
                              [tickInterval]="1"
                              min="1" max="10000"
                              step="1">
                  </mat-slider>
                  <input class="pricing-input" [(ngModel)]="totalPurchases" type="number" min="1">
                </div>

              </div>
            </div>

            <div style="padding: 24px" class="col-12 col-sm-12 col-md-4 col-xl-4 col-lg-6 box-shadow d-flex flex-column">
              <!--          <mat-card-subtitle></mat-card-subtitle>-->
              <mat-form-field class="btn-block" appearance="outline">
                <mat-label>Choose Currency</mat-label>
                <mat-select [formControl]="currencyFormControl">
                  <mat-option [value]="'TZS'">TZS</mat-option>
                  <mat-option [value]="'$'">USD</mat-option>
                </mat-select>
              </mat-form-field>
              <!--          <mat-card-subtitle>Actual cost</mat-card-subtitle>-->
              <!--          <h6>{{actualMonthlyCost() | currency: currencyFormControl.value + ' '}}</h6>-->
              <!--          <mat-card-subtitle>Discount</mat-card-subtitle>-->
              <!--          <h6>{{discount() | currency: currencyFormControl.value + ' '}}</h6>-->
              <mat-card-subtitle>Your Approximately Monthly Payment</mat-card-subtitle>
              <h4>{{monthlyCost() | currency: currencyFormControl.value + ' '}}</h4>
              <span class="flex-grow-1"></span>
            </div>

            <button style="margin-top: 24px" mat-button color="primary" routerLink="/account/register"
                    class="col-sm-12 col-md-12 col-12 col-xl-4 col-lg-4 header-btn-secondary">
              Open Account For Free
            </button>

          </div>

          <smartstock-footer></smartstock-footer>

        </div>
      </div>
    </section>
  `,
  styleUrls: ['../styles/landing.style.scss']
})
export class LandingPage implements OnInit {

  constructor(private router: Router) {
  }
  currencyFormControl = new FormControl('TZS');
  totalProducts = 1;
  totalSales = 1;
  totalPurchases = 1;



  ngOnInit(): void {
  }

  login(): void {
    this.router.navigateByUrl('login')
      .catch(reason => {
        console.log(reason.toString());
      });
  }


  formatLabel(value: number): string {
    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    if (value === 99990) {
      return '10k + ';
    }
    return value.toString();
  }

  monthlyCost(): number {
    const actual = this.calculateBill(30, this.totalSales, this.totalPurchases, this.totalProducts, this.currencyFormControl.value);
    const maxmunMonthlyCost = this.currencyFormControl.value === 'TZS' ? 150000 : 65;
    const minimumMonthlyCost = this.currencyFormControl.value === 'TZS' ? 17000 : 7;
    if (actual > maxmunMonthlyCost) {
      return maxmunMonthlyCost;
    } else if (actual < minimumMonthlyCost) {
      return minimumMonthlyCost;
    } else {
      return actual;
    }
  }

  actualMonthlyCost() {
    return this.calculateBill(30, this.totalSales, this.totalPurchases, this.totalProducts, this.currencyFormControl.value);
  }

  discount(): number {
    const actual = this.calculateBill(30, this.totalSales, this.totalPurchases, this.totalProducts, this.currencyFormControl.value);
    const maxmun = this.currencyFormControl.value === 'TZS' ? 23000 : 10;
    if (actual > maxmun) {
      return actual - maxmun;
    } else {
      return 0;
    }
  }

  calculateBill(days: number, soldItems: number, purchaseItems: number, products: number, currency: 'USD' | 'TZS'): number {
    const exRate = currency === 'TZS' ? 2300 : 1;
    const salesCost = 0.000133333 * days * exRate * soldItems;
    const purchaseCost = 0.0004 * days * exRate * purchaseItems;
    const stockCost = 0.0003 * days * exRate * products;
    const analyticsCost = 0.01 * days * exRate;
    return (salesCost + purchaseCost + stockCost + analyticsCost);
  }
}
