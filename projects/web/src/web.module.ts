import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingPage} from './pages/landing.page';
import {FooterComponent} from './componets/footer.component';
import {PrivacyPageComponent} from './pages/privacy.page';
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

const routes: Routes = [
  {
    path: '', canActivate: [BrowserPlatformGuard], component: LandingPage
  },
  {
    path: 'privacy', canActivate: [BrowserPlatformGuard], component: PrivacyPageComponent
  },
];

@NgModule({
  declarations: [
    LandingPage,
    FooterComponent,
    PrivacyPageComponent,
    MallDrawerComponent
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
    MatIconModule
  ],
})
export class WebModule {
}
