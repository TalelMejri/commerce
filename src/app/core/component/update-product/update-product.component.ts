import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/model/Product';
import { ProductService } from '../../services/api/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product:Product=new Product();
  private sub: any;
  error:String="";
  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
    this.product.productid = +params['id'];
    this.product.libelle=params['libelle'];
    this.product.prix=+params['prix'];
  })
   // this.updatedproduct();
  }

  updatedproduct(){
    this.productService.updatedproduct(this.product,this.product.productid).subscribe(p=>{
      //this.product=p;
      this.router.navigate(['']);
  })
}


}

