import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FakeproductsService {

  constructor(private http:HttpClient) { }
  products:any;
  getproducts(){
    return this.http.get("https://fakestoreapi.com/products");
  }
}
