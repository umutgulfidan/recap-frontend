import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../modules/dataResponseModel';
import { Car } from '../modules/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private apiUrl:string = "https://localhost:44310/api/cars/getall"
  constructor(private httpClient:HttpClient) { }

  getCars():Observable<DataResponseModel<Car>>{
    return this.httpClient.get<DataResponseModel<Car>>(this.apiUrl)
  }

}
