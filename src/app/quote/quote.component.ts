import { Component, OnInit } from '@angular/core';
import { DataservicesService } from "../services/dataservices.service";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  CurrencyRateDolar: String;
  CurrencyRateReal: String;
  DataService: DataservicesService;
  
  constructor(private dataService: DataservicesService){
    this.DataService = dataService;
    this.LoadInformation();
  }

  LoadInformation(){
    this.DataService.getCurrencyRate("USD").subscribe(data => {
      this.CurrencyRateDolar = data.toString();        
    }, error => {
      console.log(error);
    });
    this.DataService.getCurrencyRate("BRL").subscribe(data => {
      this.CurrencyRateReal = data.toString();        
    }, error => {
      console.log(error);
    })
  }

  ngOnInit(): void {
  }

}
