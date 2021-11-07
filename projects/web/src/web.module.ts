import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPage} from './pages/landing.page';
import {FooterComponent} from './componets/footer.component';
import {PrivacyPage} from './pages/privacy.page';
import {RouterModule, ROUTES, Routes} from '@angular/router';
import {MatDividerModule} from '@angular/material/divider';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatOptionModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {BrowserPlatformGuard} from './guards/browser-platform.guard';
import {MatButtonModule} from '@angular/material/button';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatListModule} from '@angular/material/list';
import {LibModule} from '@smartstocktz/core-libs';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MallDrawerComponent} from './componets/mall-drawer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {LandingDesktopComponent} from './componets/landing-desktop.component';
import {JoinPromotionComponent} from './componets/join-promotion.component';
import {MallFiltersDrawerComponent} from './componets/mall-filters-drawer.component';
import {MallsComponent} from './componets/malls.component';
import {MallComponent} from './componets/mall.component';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {PricingPage} from './pages/pricing.page';
import {AboutPage} from './pages/about.page';
import {FeaturesPage} from './pages/features.page';
import {DownloadsPage} from './pages/downloads.page';

const routes: Routes = [
  {
    path: '', canActivate: [BrowserPlatformGuard], component: LandingPage
  },
  {
    path: 'privacy', canActivate: [BrowserPlatformGuard], component: PrivacyPage
  },
  {
    path: 'pricing', canActivate: [BrowserPlatformGuard], component: PricingPage
  },
  {
    path: 'downloads', canActivate: [BrowserPlatformGuard], component: DownloadsPage
  },
  {
    path: 'about', canActivate: [BrowserPlatformGuard], component: AboutPage
  },
  {
    path: 'features', canActivate: [BrowserPlatformGuard], component: FeaturesPage
  },
];

@NgModule({
  declarations: [
    LandingPage,
    FooterComponent,
    PrivacyPage,
    MallDrawerComponent,
    LandingDesktopComponent,
    JoinPromotionComponent,
    MallFiltersDrawerComponent,
    MallsComponent,
    MallComponent,
    PricingPage,
    AboutPage,
    FeaturesPage,
    DownloadsPage
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
  ],
})
export class WebModule {
}
