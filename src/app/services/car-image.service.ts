import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiUrl } from '../modules/url';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../modules/dataResponseModel';
import { CarImage } from '../modules/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {
  url = ApiUrl+"carimages/"
  constructor(private httpClient:HttpClient) { }

  getCarImages():Observable<DataResponseModel<CarImage>>{
    return this.httpClient.get<DataResponseModel<CarImage>>(this.url+"getall");
  }

  getCarImagesByCarId():Observable<DataResponseModel<CarImage>>{
    return this.httpClient.get<DataResponseModel<CarImage>>(this.url+"getbycarid");
  }
}
