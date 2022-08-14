import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/model/Product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  constructor(private http:HttpClient) { }

  getproduct(): Observable<Product[]> {
    //http://
    return this.http.get<Product[]>("http://localhost:8080/ConsulterProduct");
  }

  addproduct():Observable<Product[]>{
    return this.http.post<Product[]>("http://localhost:8080/AddProduitComponent",Product);
  }

}
