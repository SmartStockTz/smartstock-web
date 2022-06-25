import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatCardModule } from "@angular/material/card";
import { ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatDialogModule } from "@angular/material/dialog";
import { MatBottomSheetModule } from "@angular/material/bottom-sheet";
import { init } from "bfast";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { HttpClientModule } from "@angular/common/http";
import { SmartstockHttpAdapter } from "smartstock-core";
import { environment } from "../environments/environment";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("../../../web/src/public-api").then((mod) => mod.WebModule)
  },
  {
    path: "account",
    loadChildren: () =>
      import("smartstockt-accounts").then((mod) => mod.AccountModule)
  }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" }),
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatBottomSheetModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private readonly smartstockHttp: SmartstockHttpAdapter) {
    init({
      applicationId: "smartstock_lb",
      projectId: "smartstock",
      databaseURL: environment.baseDaasUrl,
      functionsURL: environment.baseFaasUrl,
      adapters: {
        http: (_) => this.smartstockHttp
      }
    });
  }
}
