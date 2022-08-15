import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/api/product.service';
import { Product } from 'src/app/shared/model/Product';

@Component({

  selector: 'app-consulte-all-product',
  templateUrl: './consulte-all-product.component.html',
  styleUrls: ['./consulte-all-product.component.css']

})

export class ConsulteAllProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService:ProductService) {
  }

  ngOnInit(): void {
    this.getproduct();
    //this.deleteproduct();
  }

 /* deleteproduct(productid:number){
    this.productService.deleteproduct().subscribe(p=>{

    })
  }*/

  getproduct() {
    this.productService.getproduct().subscribe(products => {
      this.products = products;
    })
  }

}
