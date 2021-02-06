import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from "@angular/forms";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from "@angular/common/http";
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './index';
import { ToastrModule } from 'ngx-toastr';
import { ToastrEffects } from './effects/toastr.effects';
// Custom component
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { QuoteComponent } from './quote/quote.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DataservicesService } from "./services/dataservices.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    QuoteComponent,
    PurchaseComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    ToastrModule.forRoot(),
    EffectsModule.forRoot([ToastrEffects])
  ],
  providers: [DataservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
