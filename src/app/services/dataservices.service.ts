import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { CurrencyTransaction } from "../model/currency-transaction";

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  private readonly ApiUrl = "https://localhost:44345/api/Default";

  constructor(private http: HttpClient) { }

  getCurrencyRate(code:String) {
    return this.http.get(`${this.ApiUrl}/${code}`);
  }

  savePurchase(data: CurrencyTransaction){
    return this.http.post<CurrencyTransaction>(`${this.ApiUrl}`, data);
  }

}
