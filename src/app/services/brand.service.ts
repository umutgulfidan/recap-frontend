import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataResponseModel } from '../modules/dataResponseModel';
import { Brand } from '../modules/brand';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  private apiUrl:string = "https://localhost:44310/api/brands/getall"
  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<DataResponseModel<Brand>>{
    return this.httpClient.get<DataResponseModel<Brand>>(this.apiUrl)
  }
  
}
