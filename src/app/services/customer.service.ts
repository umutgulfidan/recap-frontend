import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../modules/dataResponseModel';
import { Customer } from '../modules/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private apiUrl:string = "https://localhost:44310/api/customers/getall"
  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<DataResponseModel<Customer>>{
    return this.httpClient.get<DataResponseModel<Customer>>(this.apiUrl)
  }
}
