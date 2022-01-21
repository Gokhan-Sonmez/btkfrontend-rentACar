import { CreateIndividualCustomerRequestModel } from './../models/createIndividualRequestModel';
import { ResponseModel } from './../models/responseModel';
import { IndividualCustomerModel } from './../models/individualCustomerModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IndividualCustomerService {

  apiUrl:string  ="http://localhost:8080/api/rentals/"
  constructor(private httpClient :HttpClient) { }

  getIndividualCustomers():Observable<ListResponseModel<IndividualCustomerModel>>{
    return this.httpClient.get<ListResponseModel<IndividualCustomerModel>>(this.apiUrl+"getall")
  }
  getIndividualCustomerById(rentalId: number): Observable<SingleResponseModel<IndividualCustomerModel>> {
    let newPath = this.apiUrl + 'getById?rentalId=' + rentalId;
    return this.httpClient.get<SingleResponseModel<IndividualCustomerModel>>(newPath);
  }

  addIndividualCustomer(rental: CreateIndividualCustomerRequestModel): Observable<ResponseModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    let newPath = this.apiUrl + 'addforindividiualcustomer';
    return this.httpClient.post<ResponseModel>(newPath, rental, httpOptions);
  }

}
