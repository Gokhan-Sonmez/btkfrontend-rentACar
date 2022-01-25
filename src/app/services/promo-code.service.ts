import { ResponseModel } from './../models/responseModel';
import { PromoCodeListModel } from './../models/promoCodeListModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PromoCodeService {

  apiUrl:string  ="http://localhost:8080/api/promocodes/"
  constructor(private httpClient :HttpClient) { }

  getPromocodes():Observable<ListResponseModel<PromoCodeListModel>>{
    return this.httpClient.get<ListResponseModel<PromoCodeListModel>>(this.apiUrl+"getall")
  }

  getPromocodeById(promoCodeId: number): Observable<SingleResponseModel<PromoCodeListModel>> {
    let newPath = this.apiUrl + 'getById?promoCodeId=' + promoCodeId;
    return this.httpClient.get<SingleResponseModel<PromoCodeListModel>>(newPath);
  }

  getByCode(code:string): Observable<SingleResponseModel<PromoCodeListModel>>{ 
    return this.httpClient.get<SingleResponseModel<PromoCodeListModel>>(this.apiUrl+"getByCode/"+code)
  }

  addPromoCode(promoCode:PromoCodeListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "add"
    return this.httpClient.post<ResponseModel>(newPath,promoCode,httpOptions);
  }

  deletePromoCode(promoCode:PromoCodeListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "delete/" + promoCode.id
    return this.httpClient.delete<ResponseModel>(newPath,httpOptions);
  }

  updatePromoCode(promoCode:PromoCodeListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "update"
    return this.httpClient.post<ResponseModel>(newPath,promoCode,httpOptions);
  }


}
