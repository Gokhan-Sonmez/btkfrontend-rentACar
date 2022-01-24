import { ResponseModel } from './../models/responseModel';
import { CreateRentalRequestModel } from './../models/createRentalRequestModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { RentalListModel } from './../models/rentalListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl:string  ="http://localhost:8080/api/rentals/"
  constructor(private httpClient :HttpClient) { }


  getRentals():Observable<ListResponseModel<RentalListModel>>{
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl+"getall")
  }
  getRentalById(rentalId: number): Observable<SingleResponseModel<RentalListModel>> {
    let newPath = this.apiUrl + 'getByRentalId?rentalId=' + rentalId;
    return this.httpClient.get<SingleResponseModel<RentalListModel>>(newPath);
  }
  getRentalCarById(carId: number): Observable<SingleResponseModel<RentalListModel>> {
    let newPath = this.apiUrl + 'getRentalByCarId?carId=' + carId;
    return this.httpClient.get<SingleResponseModel<RentalListModel>>(newPath);
  }

  addRentalforindividiualcustomer(rental: CreateRentalRequestModel): Observable<ResponseModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let newPath = this.apiUrl + 'addforindividiualcustomer';
    return this.httpClient.post<ResponseModel>(newPath, rental, httpOptions);
  }
}
