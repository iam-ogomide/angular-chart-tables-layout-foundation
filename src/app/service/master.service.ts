import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from '../_model/Customer';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  GetChartInfo() {
    return this.http.get("http://localhost:3000/sales")
  }

  GetCustomer():Observable<Customer[]> {
    return this.http.get<Customer[]>("http://localhost:3301/customer")
  }
}
