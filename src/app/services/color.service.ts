import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../modules/dataResponseModel';
import { Color } from '../modules/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  private apiUrl : string = "https://localhost:44310/api/colors/getall"
  constructor(private httpClient:HttpClient) { }

  getColors():Observable<DataResponseModel<Color>>{
    return this.httpClient.get<DataResponseModel<Color>>(this.apiUrl)
  }
}
