import { Component, OnInit } from '@angular/core';
import { DataservicesService } from "../services/dataservices.service";
import { Store } from '@ngrx/store';
import * as showToast from "../reducers/toastr.reducers";
import { error } from "../actions/toastr.actions";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  CurrencyRateDolar: String;
  CurrencyRateReal: String;
  DataService: DataservicesService;
  
  constructor(private dataService: DataservicesService,
    private store: Store<showToast.State>){
    this.DataService = dataService;
    this.LoadInformation();
  }

  LoadInformation(){
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

}
