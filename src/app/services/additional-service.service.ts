import { CreateAdditionalServiceModel } from './../models/createAdditionalServiceRequestModel';
import { AdditionalServiceListModel } from './../models/additionalServiceListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceService {

  apiUrl:string  ="http://localhost:8080/api/additionalservices/"
  constructor(private httpClient :HttpClient) { }

  getAllByRentalId(rentalId:number): Observable<ListResponseModel<AdditionalServiceListModel>>{ 
    return this.httpClient.get<ListResponseModel<AdditionalServiceListModel>>(this.apiUrl+"getByRentalId/"+rentalId)
  }
  add(services: CreateAdditionalServiceModel[]): Observable<ListResponseModel<AdditionalServiceListModel>>{ 
    return this.httpClient.post<ListResponseModel<AdditionalServiceListModel>>(this.apiUrl+"add/",services)
  }
}
