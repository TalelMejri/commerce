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

  addproduct(product:Product):Observable<Product>{
    return this.http.post<Product>("http://localhost:8080/addProduct",product);
  }

  updatedproduct(product:Product):Observable<Product> {
    return this.http.put<Product>("http://localhost:8080/updateProduct",product);
  }

  deleteproduct(id:number){
    return this.http.delete<Product>("http://localhost:8080/deleteProduit?id"+id);
  }

}
