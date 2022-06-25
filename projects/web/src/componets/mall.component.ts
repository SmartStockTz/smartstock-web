import { Component, Input, OnInit } from "@angular/core";
import { MallModel } from "../models/mall.model";
import { MallService } from "../sevices/mall.service";
import { StockModel } from "smartstock-core";

@Component({
  selector: "app-mall",
  template: `
    <div class="mall-container">
      <div class="mall-head">
        <img
          *ngIf="!logoError"
          (error)="hideLogo()"
          class="logo"
          src="{{ mall?.shop?.ecommerce?.logo }}"
          alt="Logo"
        />
        <span class="name">{{ mall?.shop?.businessName }}</span>
        <span style="flex: 1 1 auto"></span>
        <!--        <button routerLink="/shops/{{mall.shop.projectId}}" mat-button color="primary" class="view-shop">View Shop-->
        <!--        </button>-->
      </div>
      <hr class="line" />
      <img
        *ngIf="showCover"
        routerLink="/shops/{{ mall.shop.projectId }}"
        (error)="imgError($event)"
        src="{{ mall?.shop?.ecommerce?.cover }}"
        alt="cover photo"
        class="cover"
      />
      <p class="about text-wrap">{{ mall?.shop?.ecommerce?.about }}</p>
      <div class="tabs">
        <mat-icon color="primary">dashboard</mat-icon>
        <span>Products</span>
      </div>
      <a routerLink="/shops/{{ mall.shop.projectId }}">
        <span class="view-products-text">View all products</span>
      </a>
      <div *ngIf="hasProducts" class="product-preview-container">
        <div id="in">
          <div
            routerLink="/shops/{{ mall.shop.projectId }}"
            [queryParams]="{ product: product.product }"
            *ngFor="let product of products"
            class="product-preview"
          >
            <span class="preview-category">{{ product.category }}</span>
            <span class="preview-name text-truncate">{{
              product.product
            }}</span>
            <span class="preview-price"
              >{{
                mall?.shop?.settings?.currency
                  ? mall?.shop?.settings?.currency
                  : "Tsh"
              }}
              {{ product.retailPrice | number }}</span
            >
          </div>
          <p *ngIf="isLoadPreview">Load preview....</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ["../styles/mall.style.scss"]
})
export class MallComponent implements OnInit {
  @Input() mall: MallModel;
  totalProducts = 0;
  showCover = true;
  products: StockModel[] = [];
  hasProducts = true;
  isLoadPreview = true;
  logoError = false;

  constructor(private readonly mallService: MallService) {}

  ngOnInit(): void {
    this.isLoadPreview = true;
    this.mallService
      .previewProducts(this.mall)
      .then((value) => {
        if (Array.isArray(value) && value.length === 0) {
          this.hasProducts = false;
        } else if (!value) {
          this.hasProducts = false;
        } else {
          this.hasProducts = true;
          this.products = value;
        }
      })
      .catch((reason) => {
        console.log(reason);
        this.hasProducts = false;
      })
      .finally(() => {
        this.isLoadPreview = false;
      });
  }

  imgError($event: ErrorEvent): void {
    // console.log($event);
    $event.preventDefault();
    this.showCover = false;
  }

  hideLogo(): void {
    this.logoError = true;
  }
}
