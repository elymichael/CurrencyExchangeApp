import { Component, OnInit } from '@angular/core';
import { DataservicesService } from "../services/dataservices.service";
import { CurrencyTransaction } from "../model/currency-transaction";
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css']
})
export class PurchaseComponent implements OnInit {
  CurrencyRateDolar: String;
  CurrencyRateReal: String;
  DataService: DataservicesService;

  constructor(private dataService: DataservicesService){
    this.DataService = dataService;
    this.DataService.getCurrencyRate("USD").subscribe(data => {
      this.CurrencyRateDolar = data.toString();        
    });
    this.DataService.getCurrencyRate("BRL").subscribe(data => {
      this.CurrencyRateReal = data.toString();        
    })
  }

  ngOnInit(): void {
  }
  PurchaseCurrencyExchange(form: NgForm){
    let data: CurrencyTransaction = {
      UserID: form.value.user,
      CurrencyCode: form.value.currency,
      Amount: form.value.amount
    };

    this.dataService.savePurchase(data).subscribe(data =>{
      form.reset();
    }, error=> {
      console.log(error);
    });
  }
}
