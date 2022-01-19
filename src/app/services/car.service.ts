import { SingleResponseModel } from './../models/singleResponseModel';
import { CarListModel } from './../models/carListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl:string  ="http://localhost:8080/api/cars/"
  constructor(private httpClient :HttpClient) { }


  getCars():Observable<ListResponseModel<CarListModel>>{
    return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+"getall")
  }
  getCarsById(carId: number): Observable<SingleResponseModel<CarListModel>> {
    let newPath = this.apiUrl + 'getById?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<CarListModel>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarListModel>> {
    let newPath =
    this.apiUrl + 'getCarByBrandId?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<CarListModel>> {
    let newPath =
    this.apiUrl + 'getCarByColorId?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }

  getCarsBySelect(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarListModel>> {
    let newPath =
    this.apiUrl +
      'getbyselected?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }
}
