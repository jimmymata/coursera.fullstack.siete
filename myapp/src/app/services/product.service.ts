import { Injectable } from '@angular/core';
import { Product } from "../interfaces/product";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //data: Product[] = []

  constructor(private http: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/getdata');
    //.catch(this.errorHandler);
  }

  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "Server error !!!");
  }

}
