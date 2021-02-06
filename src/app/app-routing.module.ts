import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuoteComponent } from "./quote/quote.component";
import { PurchaseComponent } from "./purchase/purchase.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  {
    path: "quote",
    component: QuoteComponent
  },
  {
    path: "purchase",
    component: PurchaseComponent
  },
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "**",
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
