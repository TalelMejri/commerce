import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/core/services/api/product.service';
import { Product } from 'src/app/shared/model/Product';

@Component({

  selector: 'app-consulte-all-product',
  templateUrl: './consulte-all-product.component.html',
  styleUrls: ['./consulte-all-product.component.css']

})

export class ConsulteAllProductComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService:ProductService,private router:Router) {
  }

  ngOnInit(): void {
    this.getproduct();
   // this.deleteproduct();
  }

  deleteproduct(productid:number){
    this.productService.deleteproduct(productid).subscribe(p=>{
      this.getproduct();
     // this.router.navigate(['']);
    })
  }

  getproduct() {
    this.productService.getproduct().subscribe(p => {
      this.products = p;
    })
  }

}
