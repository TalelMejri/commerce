import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/model/Product';
import { HttpClient, HttpParams } from '@angular/common/http';

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

  updatedproduct(product:Product,productid:number):Observable<Product> {
    let p=new HttpParams().set('id',productid);
    return this.http.put<Product>("http://localhost:8080/updateProduct",product,{params:p});
  }

  deleteproduct(id:number){
    //let p=new HttpParams().set('id',id);
    //return this.http.delete<Product>("http://localhost:8080/deleteProduit",{params:p});
    return this.http.delete<Product>("http://localhost:8080/deleteProduit?id="+id);
    //return this.http.put<Product>("http://localhost:8080/deleteProduit",null,{params:p});
  }
}
