import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataservicesService {

  private readonly ApiUrl = "https://localhost:44345/api/Default";

  constructor(private http: HttpClient) { }

  getCurrencyRate(code:String) {

    return this.http.get(`${this.ApiUrl}/${code}`);
  }
}
