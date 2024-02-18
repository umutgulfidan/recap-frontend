import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../modules/dataResponseModel';
import { CarDetail } from '../modules/carDetail';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  private apiUrl:string = "https://localhost:44310/api/cars/getcardetails"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<DataResponseModel<CarDetail>>{
    return this.httpClient.get<DataResponseModel<CarDetail>>(this.apiUrl)
  }
}
