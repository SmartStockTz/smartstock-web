import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-landing',
  template: `
    <div class="bg-white w-100 p-0 m-0">
      <div class="mask-text">
        <h1 class="header-text text-center"></h1>
      </div>
      <nav [ngClass]="animateNavBar ? 'hide-nav-bar' : ''"
           class="navbar w-100 position-fixed navbar-expand-lg navbar-light shadow p-3 ">
        <div class="container">
          <a class="navbar-brand" href="">
            SmartStock
          </a>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="nav-link" href="#why-us">Why Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">Pricing</a>
              </li>
            </ul>
          </div>
          <span class="flex-grow-1"></span>
          <button routerLink="/account/login" class="btn btn-outline-success mx-2">Login</button>
          <button routerLink="/account/register" class="btn btn-outline-success">Register</button>
        </div>
      </nav>
      <div id="header" class="header">
        <section class="header-sm d-flex flex-column container ">
          <div
            class="header-img flex-grow-1 container d-flex align-items-start justify-content-center flex-column"></div>
          <div class="row m-0">
            <div class="flex-grow-1 container d-flex align-items-start justify-content-center flex-column">
              <h1 class="header-text">AI Powered Sales and Stock Management Software...</h1>
            </div>
          </div>
          <div class="header-sub-text pl-4">
            <p style="line-height: 4vh">
              You can’t continue using papers <br> to keep records of your business.
            <p>
<!--            <p class="py-3">Start your sales with us, today</p>-->
            <button mat-flat-button color="primary" routerLink="/account/register" class=" header-btn">
              Open Account For Free
            </button>
          </div>
        </section>
        <section class="header-lg d-flex flex-column container ">
          <div class="row">
            <div
              class="col-6 header-jumbo flex-grow-1 container d-flex align-items-start justify-content-center flex-column">
              <h1 class="header-text">AI Powered Sales and Stock Management Software...</h1>
              <div class="header-sub-text">
                <p style="line-height: 4vh">
                  You can’t continue using papers <br> to keep records of your business.
                <p>
<!--                <p style="padding-top: 2vh; padding-bottom: 2vh">Start your sales with us, today</p>-->
                <button mat-flat-button color="primary" routerLink="/account/register" class="header-btn">Open Account
                  For Free
                </button>
              </div>
            </div>
            <div class="col-6 header-img flex-grow-1 container d-flex align-items-start flex-column"></div>
          </div>
        </section>
      </div>
<!--      <div class="container" style="background: #fff">-->
<!--        <h1 style="text-align: center">Downloads</h1>-->
<!--        <div style="display: flex; flex-direction: row; justify-content: center; align-items: center; flex-wrap: wrap">-->
<!--          <a style="margin: 5px" target="_blank" href="https://snapcraft.io/smartstock" class="snap-store">-->
<!--          </a>-->
<!--          <a style="margin: 5px" class="windows-store" target="_blank"-->
<!--             href="https://smartstock-daas.bfast.fahamutech.com/storage/smartstock_lb/file/smartstock.exe">-->
<!--            &lt;!&ndash;                <img alt="Get it from the Snap Store"&ndash;&gt;-->
<!--          </a>-->
<!--          <a style="margin: 5px" class="mac-store" target="_blank"-->
<!--             href="https://smartstock-daas.bfast.fahamutech.com/storage/smartstock_lb/file/e54deab4-2b39-4548-8f77-17ad7692cf82-smartstock21.5.1build.6.dmg">-->
<!--            &lt;!&ndash;                <img alt="Get it from the Snap Store"&ndash;&gt;-->
<!--          </a>-->
<!--          <a style="margin: 5px" class="play-store"-->
<!--             target="_blank"-->
<!--             href='https://play.google.com/store/apps/details?id=com.fahamutech.smartstockbusiness&pcampaignid=-->
<!--                pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'>-->
<!--          </a>-->
<!--        </div>-->
<!--      </div>-->
      <section class="why-smartstock" id="why-us" [ngClass]="animateWhyUsDiv ? 'visible' : ''">
        <div class="section-header ">
          <h1>Why SmartStock?</h1>
          <ul class="list-unstyled d-flex justify-content-center align-items-center">
            <li *ngFor="let x of [1,2,3,4]"></li>
          </ul>
        </div>
        <div class="container ">
          <div class="row my-md-5 my-4">
            <div class="col-sm-6 col-md-4 px-lg-5 my-4 text-center ">
              <img src="/assets/img/everyWhere_icon.png">
              <h2>Work everywhere</h2>
              <p>
                You can access our system either by <b>desktop / laptop</b>, <b>mobile</b> or <b>web browser</b>
              </p>
            </div>
            <div class="col-sm-6 col-md-4 px-lg-5 my-4 text-center">
              <img src="/assets/img/“99.9%25”.png" width="50%" class="py-5">
              <h2>Always available</h2>
              <p>
                Due to internet connectivity challenge
                our service available offline and online
              </p>
            </div>
            <div class="col-sm-6 col-md-4 px-lg-5 my-4 text-center">
              <img src="/assets/img/customisable_icon.png">
              <h2>Customizable</h2>
              <p>Say how you want it to work for you
                and it will work the way you want</p>
            </div>
            <div class="col-sm-6 col-md-4 px-lg-5 my-4 text-center">
              <img src="/assets/img/everyWhere_icon.png">
              <h2>Customer Engagement</h2>
              <p>
                Create your online shop for customer to make order and see your products.
              </p>
            </div>
            <div class="col-sm-6 col-md-4 px-lg-5 my-4 text-center">
              <img src="/assets/img/customisable_icon.png" width="47%" class="p-3">
              <h2>Business Intelligence</h2>
              <p>
                Artificial Intelligence Algorithms to provide business insights to increase sales.
              </p>
            </div>
            <div class="col-sm-6 col-md-4 px-lg-5 my-4 text-center">
              <img src="/assets/img/receipt.svg">
              <h2>Printer</h2>
              <p>
                Printer is integrated by default. Your customer deserve a receipt.
              </p>
            </div>
          </div>

        </div>
      </section>
      <div class="pricing-container py-5" [ngClass]="animatePricingDiv ? 'visible' : ''">
        <section id="pricing" (window:scroll)="onScroll($event)" class="text-center  py-2 w-100">
          <div>
            <div class="section-header">
              <h1>Pricing Plans</h1>
              <ul class="list-unstyled d-flex justify-content-center align-items-center">
                <li *ngFor="let x of [1,2,3,4]"></li>
              </ul>
            </div>
            <p>Pay for what you use only</p>
            <p>Monthly Pricing
              <mat-slide-toggle [(ngModel)]="activateDiscount">Annual Pricing (10% discount)</mat-slide-toggle>
            </p>
          </div>
          <div class="row pt-3 mx-5 container justify-content-center align-items-center pricing-body">
            <div class="col-11 col-md-8 col-lg-6 left-div bg-white mat-elevation-z24 m-0 p-0 ">
              <h1 class="mb-0 p-4">All In One Pack</h1>
              <hr class="mt-0">
              <div class="d-flex flex-column align-items-center">
                <p class="p-2">
                  <span class="mat-display-1">TZS {{activateDiscount ? 30000 - 30000 * 0.1 : '30000'}}</span><br>
                  <span class="text-muted">/ month / shop</span>
                </p>
                <ul class="list-unstyled my-2 mx-4 mx-sm-auto">
                  <li>Unlimited Users</li>
                  <li>Online Access</li>
                  <li>Offline Access</li>
                  <li>Printer and Scanner Access</li>
                  <li>Intelligence Pack</li>
                  <li>E-commerce outlet for online order</li>
                  <li>Help center and training access</li>
                </ul>
              </div>
              <hr class="mb-0">
              <button mat-flat-button color="primary" routerLink="/account/register" class="m-3 header-btn">Open Account
                For Free
              </button>
            </div>
            <div class="col-10 col-md-7 col-lg-6 right-div bg-success text-white mat-elevation-z24 m-0 p-0 ">
              <h1 class="col-9 col-md-12 mx-auto my-2 my-md-4 text-white">Start Your Free 7-Day Trial</h1>
              <hr class="mt-0 bg-white">
              <p class="col-9 col-lg-6 m-auto py-2 py-md-4">
                Need More than what we offer?
              </p>
              <p class="col-9 col-lg-6 m-auto py-2 py-md-4">
                We can customize it just the way you want!
              </p>
              <hr class="mb-0">
              <h2 class="link mb-0 p-4 text-white" (click)="maximazeTawk()">CONTACT US</h2>
            </div>
          </div>
        </section>
      </div>
      <div id="footer" class="container">
        <app-footer></app-footer>
      </div>
    </div>
  `,
  styleUrls: ['../styles/landing.style.scss', '../styles/footer.style.scss']
})
export class LandingPage implements OnInit {
  animateWhyUsDiv = false;
  animateNavBar = false;
  lastScroll = 0;

  constructor(private router: Router) {
    document.title = 'SmartStock';
  }

  activateDiscount = false;
  currencyFormControl = new FormControl('TZS');
  totalProducts = 1;
  totalSales = 1;
  totalPurchases = 1;
  animatePricingDiv = false;


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

  actualMonthlyCost(): any {
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

  onScroll(event: Event): void {
    const pricingHeight = Math.round(document.getElementById('pricing').offsetHeight);
    const whyUsHeight = Math.round(document.getElementById('why-us').offsetHeight);
    this.animateWhyUsDiv = Math.round(document.getElementById('why-us').getBoundingClientRect().y) <= whyUsHeight - (whyUsHeight / 4);
    this.animatePricingDiv = Math.round(document.getElementById('pricing').getBoundingClientRect().y) <=
      pricingHeight - (pricingHeight / 4);

    const currentY = window.pageYOffset;

    if (currentY > this.lastScroll) {
      if (currentY > this.lastScroll + 25) {
        this.animateNavBar = true;
        this.lastScroll = currentY;
      }
    } else {
      this.lastScroll = currentY;
      this.animateNavBar = false;
    }
  }

  maximazeTawk(): void {
    // @ts-ignore
    if (window.$_Tawk) {
      // @ts-ignore
      window.$_Tawk.maximize();
    }
  }
}
