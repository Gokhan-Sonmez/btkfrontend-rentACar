import { SingleResponseModel } from './../models/singleResponseModel';
import { CityListModel } from './../models/cityListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  apiUrl:string  ="http://localhost:8080/api/cities/"
  constructor(private httpClient :HttpClient) { }


  getCities():Observable<ListResponseModel<CityListModel>>{
    return this.httpClient.get<ListResponseModel<CityListModel>>(this.apiUrl+"getall")
  }

  getCarsById(cityId: number): Observable<SingleResponseModel<CityListModel>> {
    let newPath = this.apiUrl + 'getById?cityId=' + cityId;
    return this.httpClient.get<SingleResponseModel<CityListModel>>(newPath);
  }

}
