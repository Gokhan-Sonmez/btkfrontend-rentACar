import { ListResponseModel } from './../models/listResponseModel';
import { CarClassListModel } from './../models/carClassListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarClassService {

  apiUrl:string  ="http://localhost:8080/api/carClasses/"
  constructor(private httpClient :HttpClient) { }


  getCarClasses():Observable<ListResponseModel<CarClassListModel>>{
    return this.httpClient.get<ListResponseModel<CarClassListModel>>(this.apiUrl+"getall")
  }
}
