import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { CardListModel } from './../models/cardListModel';

import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  apiUrl:string  ="http://localhost:8080/api/cards/"
  constructor(private httpClient :HttpClient) { }

  getCards():Observable<ListResponseModel<CardListModel>>{
    return this.httpClient.get<ListResponseModel<CardListModel>>(this.apiUrl+"getall")
  }

  getCardById(cardId: number): Observable<SingleResponseModel<CardListModel>> {
    let newPath = this.apiUrl + 'getById?cardId=' + cardId;
    return this.httpClient.get<SingleResponseModel<CardListModel>>(newPath);
  }

  addCard(card:CardListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "add"
    return this.httpClient.post<ResponseModel>(newPath,card,httpOptions);
  }

  deleteCard(card:CardListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "delete/" + card.id
    return this.httpClient.delete<ResponseModel>(newPath,httpOptions);
  }

  updateCard(card:CardListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "update"
    return this.httpClient.post<ResponseModel>(newPath,card,httpOptions);
  }

}
