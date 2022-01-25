import { CreateCarRequestModel } from './../models/createCarRequestModel';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { CarListModel } from './../models/carListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  apiUrl: string = 'http://localhost:8080/api/cars/';
  constructor(private httpClient: HttpClient) {}

  getCars(): Observable<ListResponseModel<CarListModel>> {
    return this.httpClient.get<ListResponseModel<CarListModel>>(
      this.apiUrl + 'getall'
    );
  }
  getCarsById(carId: number): Observable<SingleResponseModel<CarListModel>> {
    let newPath = this.apiUrl + 'getById?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<CarListModel>>(newPath);
  }

  getCarsByBrand(brandId: number): Observable<ListResponseModel<CarListModel>> {
    let newPath = this.apiUrl + 'getCarByBrandId?brandId=' + brandId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }
  getCarsByColor(colorId: number): Observable<ListResponseModel<CarListModel>> {
    let newPath = this.apiUrl + 'getCarByColorId?colorId=' + colorId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }

  getCarsByCity(cityId: number): Observable<ListResponseModel<CarListModel>> {
    let newPath = this.apiUrl + 'getCarByColorId?cityId=' + cityId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }

  getCarsBySelect(
    brandId: number,
    colorId: number
  ): Observable<ListResponseModel<CarListModel>> {
    let newPath =
      this.apiUrl +
      'getCarBrandIdAndColorId?brandId=' +
      brandId +
      '&colorId=' +
      colorId;
    return this.httpClient.get<ListResponseModel<CarListModel>>(newPath);
  }

  addCar(car: CreateCarRequestModel): Observable<ResponseModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ResponseModel>(newPath, car, httpOptions);
  }
  deleteCar(car: CarListModel): Observable<ResponseModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let newPath = this.apiUrl + 'delete/' + car.id;
    return this.httpClient.delete<ResponseModel>(newPath, httpOptions);
  }
  updateCar(car: CreateCarRequestModel): Observable<ResponseModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let newPath = this.apiUrl + 'update';
    return this.httpClient.post<ResponseModel>(newPath, car, httpOptions);
  }
}
