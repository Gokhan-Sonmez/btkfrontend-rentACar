import { ResponseModel } from './../models/responseModel';
import { ColorListModel } from './../models/colorListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl:string  ="http://localhost:8080/api/colors/"
  constructor(private httpClient :HttpClient) { }


  getColors():Observable<ListResponseModel<ColorListModel>>{
    return this.httpClient.get<ListResponseModel<ColorListModel>>(this.apiUrl+"getall")
  }

  addColor(color:ColorListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "add"
    return this.httpClient.post<ResponseModel>(newPath,color,httpOptions);
  }
  deleteColor(color:ColorListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "delete"
    return this.httpClient.post<ResponseModel>(newPath,color,httpOptions);
  }
  updateColor(color:ColorListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "update"
    return this.httpClient.post<ResponseModel>(newPath,color,httpOptions);
  }
}
