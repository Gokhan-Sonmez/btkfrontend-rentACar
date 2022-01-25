import { ResponseModel } from './../models/responseModel';
import { SingleResponseModel } from './../models/singleResponseModel';
import { PaymentListModel } from './../models/paymentListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  apiUrl:string  ="http://localhost:8080/api/payments/"
  constructor(private httpClient :HttpClient) { }

  getPayments():Observable<ListResponseModel<PaymentListModel>>{
    return this.httpClient.get<ListResponseModel<PaymentListModel>>(this.apiUrl+"getall")
  }

  getPaymentById(paymentId: number): Observable<SingleResponseModel<PaymentListModel>> {
    let newPath = this.apiUrl + 'getById?paymentId=' + paymentId;
    return this.httpClient.get<SingleResponseModel<PaymentListModel>>(newPath);
  }

  addPayment(payment:PaymentListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "add"
    return this.httpClient.post<ResponseModel>(newPath,payment,httpOptions);
  }

  deletePayment(payment:PaymentListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "delete/" + payment.id
    return this.httpClient.delete<ResponseModel>(newPath,httpOptions);
  }

  updatePayment(payment:PaymentListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "update"
    return this.httpClient.post<ResponseModel>(newPath,payment,httpOptions);
  }
}
