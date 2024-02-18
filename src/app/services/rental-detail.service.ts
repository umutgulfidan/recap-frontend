import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../modules/dataResponseModel';
import { RentalDetail } from '../modules/rentalDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalDetailService {
  private apiUrl :string = "https://localhost:44310/api/rentals/getrentaldetails"
  constructor(private httpClient:HttpClient) { }
  getRentalDetails():Observable<DataResponseModel<RentalDetail>>{
    return this.httpClient.get<DataResponseModel<RentalDetail>>(this.apiUrl)
  }
}
