import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ShopsPage } from "./pages/shops.page";
import { FooterComponent } from "./componets/footer.component";
import { PrivacyPage } from "./pages/privacy.page";
import { RouterModule, ROUTES, Routes } from "@angular/router";
import { MatDividerModule } from "@angular/material/divider";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { MatSliderModule } from "@angular/material/slider";
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatListModule } from "@angular/material/list";
import { LibModule } from "smartstock-core";
import { MatDialogModule } from "@angular/material/dialog";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { MallDrawerComponent } from "./componets/mall-drawer.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatIconModule } from "@angular/material/icon";
import { Shops } from "./componets/shops";
import { Promotion } from "./componets/promotion";
import { MallFiltersDrawerComponent } from "./componets/mall-filters-drawer.component";
import { MallsComponent } from "./componets/malls.component";
import { MallComponent } from "./componets/mall.component";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { PricingPage } from "./pages/pricing.page";
import { AboutPage } from "./pages/about.page";
import { FeaturesPage } from "./pages/features.page";
import { DownloadsPage } from "./pages/downloads.page";
import { PricingComponent } from "./componets/pricing.component";
import { FreePricingComponent } from "./componets/free-pricing.component";
import { PaidPricingComponent } from "./componets/paid-pricing.component";
import { DownloadsComponent } from "./componets/downloads.component";
import { DesktopDownloadsComponent } from "./componets/desktop-downloads.component";
import { MobileDownloadsComponent } from "./componets/mobile-downloads.component";
import { ProductsPage } from "./pages/products.page";
import { Products } from "./componets/products";
import { Product } from "./componets/product";

const routes: Routes = [
  {
    path: "",
    component: ProductsPage
  },
  {
    path: "products",
    component: ProductsPage
  },
  {
    path: "shops",
    component: ShopsPage
  },
  {
    path: "shops/:id",
    loadChildren: () =>
      import("smartstock-shop").then((value) => value.EcommerceModule)
  },
  {
    path: "privacy",
    component: PrivacyPage
  },
  {
    path: "pricing",
    component: PricingPage
  },
  {
    path: "downloads",
    component: DownloadsPage
  },
  {
    path: "about",
    component: AboutPage
  },
  {
    path: "features",
    component: FeaturesPage
  }
];

@NgModule({
  declarations: [
    ProductsPage,
    Products,
    Product,
    ShopsPage,
    FooterComponent,
    PrivacyPage,
    MallDrawerComponent,
    Shops,
    Promotion,
    MallFiltersDrawerComponent,
    MallsComponent,
    MallComponent,
    PricingPage,
    AboutPage,
    FeaturesPage,
    DownloadsPage,
    PricingComponent,
    FreePricingComponent,
    PaidPricingComponent,
    DownloadsComponent,
    DesktopDownloadsComponent,
    MobileDownloadsComponent,
    Products
  ],
  imports: [
    CommonModule,
    {
      providers: [
        {
          multi: true,
          provide: ROUTES,
          useValue: routes
        }
      ],
      ngModule: RouterModule
    },
    MatDividerModule,
    FormsModule,
    MatCardModule,
    MatSliderModule,
    MatOptionModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSlideToggleModule,
    MatListModule,
    LibModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatToolbarModule,
    MatIconModule,
    ScrollingModule,
    InfiniteScrollModule,
    MatProgressSpinnerModule
  ]
})
export class WebModule {}
