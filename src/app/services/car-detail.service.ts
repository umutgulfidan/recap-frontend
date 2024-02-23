import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../modules/dataResponseModel';
import { CarDetail } from '../modules/carDetail';
import { Observable } from 'rxjs';
import { Car } from '../modules/car';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  private apiUrl:string = "https://localhost:44310/api/cars/getcardetails"
  constructor(private httpClient:HttpClient) { }

  getCarDetails():Observable<DataResponseModel<CarDetail>>{
    return this.httpClient.get<DataResponseModel<CarDetail>>(this.apiUrl)
  }
  getCarDetailsByCarId(carId:Number):Observable<DataResponseModel<CarDetail>>{
    var url = this.apiUrl + "bycarid/?carId="+carId
    return this.httpClient.get<DataResponseModel<CarDetail>>(url)
  }
  getCarDetailsByBrandId(brandId:Number):Observable<DataResponseModel<CarDetail>>{
    var url = this.apiUrl + "bybrandid/?brandId="+brandId
    return this.httpClient.get<DataResponseModel<CarDetail>>(url)
  }
  getCarDetailsByColorId(colorId:number):Observable<DataResponseModel<CarDetail>>{
    var url = this.apiUrl +"bycolorid/?colorId="+colorId
    return this.httpClient.get<DataResponseModel<CarDetail>>(url)
  }
}
