import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataservicesService } from "../services/dataservices.service";
import { CurrencyTransaction } from "../model/currency-transaction";
import { NgForm } from "@angular/forms";
import { Store } from '@ngrx/store';
import * as showToast from "../reducers/toastr.reducers";

import { error } from "../actions/toastr.actions";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  @Output() returnLoading: EventEmitter<any> = new EventEmitter();

  CurrencyRateDolar: String;
  CurrencyRateReal: String;
  ResultTransaction: string;
  DataService: DataservicesService;

  constructor(private dataService: DataservicesService,
    private store: Store<showToast.State>){
    this.ResultTransaction = "";
    this.DataService = dataService;
    
    this.DataService.getCurrencyRate("USD").subscribe(data => {
      this.CurrencyRateDolar = data.toString();              
    }, e => {
      this.store.dispatch(error({ message: "Error loading Currency Rate" }));
    });

    this.DataService.getCurrencyRate("BRL").subscribe(data => {
      this.CurrencyRateReal = data.toString();        
    }, e => {
      this.store.dispatch(error({ message: "Error loading Currency Rate" }));
    })
  }

  ngOnInit(): void {
  }
  PurchaseCurrencyExchange(form: NgForm) {
    this.ResultTransaction = "";    
    let data: CurrencyTransaction = {
      UserID: form.value.user,
      CurrencyCode: form.value.currency,
      Amount: form.value.amount
    };

    this.dataService.savePurchase(data).subscribe(d =>{
      form.reset();
      this.ResultTransaction = d.toString();      
      console.warn(d);
    }, e => {
      this.store.dispatch(error({ message: "Error loading Currency Rate" }));
      console.log(e);
    });
  }
}
