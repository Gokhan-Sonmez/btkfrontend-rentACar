import { CreateAdditionalServiceItemModel } from './../models/createAdditionalServiceItemRequestModel';
import { HttpClient } from '@angular/common/http';
import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { AdditionalServiceItemListModel } from './../models/additionalServiceItemListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdditionalServiceItemService {

  apiUrl:string  ="http://localhost:8080/api/additionalserviceitems/"
  constructor(private httpClient :HttpClient) { }



  getAll(): Observable<ListResponseModel<AdditionalServiceItemListModel>> {
    return this.httpClient.get<ListResponseModel<AdditionalServiceItemListModel>>(this.apiUrl + "find-all")
  }
  getById(id: number): Observable<SingleResponseModel<AdditionalServiceItemListModel>> {
    return this.httpClient.get<SingleResponseModel<AdditionalServiceItemListModel>>(this.apiUrl + "find-by-id/" + id)
  }
  add(model: CreateAdditionalServiceItemModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", model)
  }
  update(model: CreateAdditionalServiceItemModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update", model)
  }
  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + "delete/" + id)
  }
}
