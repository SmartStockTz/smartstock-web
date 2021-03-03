import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-landing',
  template: `
    <div style="background: #d1f4e6">
      <nav style="top: 0; z-index: 10000" class="navbar position-sticky navbar-expand-lg navbar-light shadow p-3 "
           style="background: #d1f4e6">
        <div class="container">

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
        </div>
      </nav>

      <section class="header-sm header d-flex flex-column container">
        <div class="header-img header-jumbo flex-grow-1 container d-flex align-items-start justify-content-center flex-column">

        </div>
        <div class="row">
          <div class="header-jumbo flex-grow-1 container d-flex align-items-start justify-content-center flex-column">
            <h1 class="header-text">AI Powered Sales and Stock Management Software...</h1>
          </div>

        </div>
        <div class="header-sub-text">
          <p style="line-height: 4vh">
            You can’t continue using papers <br> to keep records of your business.
          <p>
          <p style="padding-top: 2vh; padding-bottom: 2vh">Start your sales with us, today</p>
          <button mat-flat-button color="primary" routerLink="/account/register" class=" header-btn">Open Account For Free</button>
<!--          <div style="width: 20px; height: 20px; display: inline-block"></div>-->
<!--          <button color="primary" mat-flat-button routerLink="/account/login" class="header-btn">Login</button>-->
        </div>
      </section>

      <section class="header-lg header d-flex flex-column container">
        <div class="row">
          <div class="col-6 header-jumbo flex-grow-1 container d-flex align-items-start justify-content-center flex-column">
            <h1 class="header-text">AI Powered Sales and Stock Management Software...</h1>
            <div class="header-sub-text">
              <p style="line-height: 4vh">
                You can’t continue using papers <br> to keep records of your business.
              <p>
              <p style="padding-top: 2vh; padding-bottom: 2vh">Start your sales with us, today</p>
              <button mat-flat-button color="primary" routerLink="/account/register" class="header-btn">Open Account For Free</button>
<!--              <div style="width: 20px; height: 20px; display: inline-block"></div>-->
<!--              <button color="primary" mat-flat-button routerLink="/account/login" class="header-btn">Login</button>-->
            </div>
          </div>
          <div class="col-6 header-img header-jumbo flex-grow-1 container d-flex align-items-start flex-column">

          </div>
        </div>
      </section>

      <section style="padding-top: 16px " class="why-smartstock" id="why-us">
        <div class="container">
          <h1>Why Smartstock?</h1>
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
              <img src="/assets/img/customisable_icon.png" width="50%" style="padding: 19px 10px">
              <h4>Business Intelligence</h4>
              <p>
                Artificial Intelligence Algorithms to provide business insights to increase sales.
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

      <section style="padding-top: 36px; background: #d1f4e6" id="pricing">
        <div class="container">
          <h1>Pricing</h1>
          <mat-divider></mat-divider>
          <div style="margin-top: 60px" class="container">

            <div style="" class="row">
              <div
                class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 box-shadow d-flex flex-column align-items-start justify-content-center">
                <div class="btn-block">
                  <div class="card-deck mb-3 text-center">
                    <div class="card mb-4  shadow  card-pricing">
                      <div class="card-header">
                        <h4 class="my-0 font-weight-normal">All In One Pack</h4>
                      </div>
                      <div class="card-body">
                        <h1 class="card-title pricing-card-title">TSH 30,000 <small class="text-muted">/ month / shop</small></h1>
                        <ul class="list-unstyled mt-3 mb-4">
                          <li>Unlimited Users</li>
                          <li>Online Access</li>
                          <li>Offline Access</li>
                          <li>Printer and Scanner Access</li>
                          <li>Intelligence Pack</li>
                          <li>E-commerce outlet for online order</li>
                          <li>Help center and training access</li>
                        </ul>
<!--                        <button style="background: #00AA07; color: white" routerLink="/account/register" type="button"-->
<!--                                class="btn btn-lg btn-block">Get Started-->
<!--                        </button>-->
                      </div>
                    </div>
<!--                    <div class="card mb-4 shadow card-pricing">-->
<!--                      <div class="card-header">-->
<!--                        <h4 class="my-0 font-weight-normal">Pro</h4>-->
<!--                      </div>-->
<!--                      <div class="card-body">-->
<!--                        <h1 class="card-title pricing-card-title">TSH 50,000 <small class="text-muted">/ mo</small></h1>-->
<!--                        <ul class="list-unstyled mt-3 mb-4">-->
<!--                          <li>4 users included</li>-->
<!--                          <li>2 shops</li>-->
<!--                          <li>Online Access</li>-->
<!--                          <li>Help center and training access</li>-->
<!--                        </ul>-->
<!--                        <button style="background: #00AA07; color: white" routerLink="/account/register" type="button"-->
<!--                                class="btn btn-lg btn-block">Get started-->
<!--                        </button>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="card mb-4 shadow card-pricing">-->
<!--                      <div class="card-header">-->
<!--                        <h4 class="my-0 font-weight-normal">Medium</h4>-->
<!--                      </div>-->
<!--                      <div class="card-body">-->
<!--                        <h1 class="card-title pricing-card-title">TSH 70,000 <small class="text-muted">/ mo</small></h1>-->
<!--                        <ul class="list-unstyled mt-3 mb-4">-->
<!--                          <li>6 users included</li>-->
<!--                          <li>3 shops</li>-->
<!--                          <li>Online Access</li>-->
<!--                          <li>Help center and training access</li>-->
<!--                        </ul>-->
<!--                        <button style="background: #00AA07; color: white" routerLink="/account/register" type="button"-->
<!--                                class="btn btn-lg btn-block ">Get started-->
<!--                        </button>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                    <div class="card mb-4 shadow card-pricing">-->
<!--                      <div class="card-header">-->
<!--                        <h4 class="my-0 font-weight-normal">Enterprise</h4>-->
<!--                      </div>-->
<!--                      <div class="card-body">-->
<!--                        <h1 class="card-title pricing-card-title">TSH 100,000 <small class="text-muted">/ mo</small></h1>-->
<!--                        <ul class="list-unstyled mt-3 mb-4">-->
<!--                          <li>Unlimited Users</li>-->
<!--                          <li>5 shops</li>-->
<!--                          <li>Online Access</li>-->
<!--                          <li>Help center and training access</li>-->
<!--                        </ul>-->
<!--                        <button style="background: #00AA07; color: white" routerLink="/account/register" type="button"-->
<!--                                class="btn btn-lg btn-block">Get started-->
<!--                        </button>-->
<!--                      </div>-->
<!--                    </div>-->
                  </div>

                </div>
              </div>

              <button style="margin-top: 24px" mat-button color="primary" routerLink="/account/register"
                      class="col-12 header-btn-secondary shadow">
                Open Account For Free
              </button>

            </div>

            <app-footer></app-footer>

          </div>
        </div>
      </section>
    </div>
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
