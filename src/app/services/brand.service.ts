import { ResponseModel } from './../models/responseModel';
import { BrandListModel } from './../models/brandListModel';
import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl:string  ="http://localhost:8080/api/brands/"
  constructor(private httpClient :HttpClient) { }


  getBrands():Observable<ListResponseModel<BrandListModel>>{
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl+"getall")
  }

  addBrand(brand:BrandListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "add"
    return this.httpClient.post<ResponseModel>(newPath,brand,httpOptions);
  }

  deleteBrand(brand:BrandListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "delete/" + brand.id
    return this.httpClient.delete<ResponseModel>(newPath,httpOptions);
  }

  updateBrand(brand:BrandListModel): Observable<ResponseModel> {
    const httpOptions ={
      headers:new HttpHeaders({
        'Content-Type':  'application/json',
      })
    }
    let newPath = this.apiUrl+ "update"
    return this.httpClient.post<ResponseModel>(newPath,brand,httpOptions);
  }
}
