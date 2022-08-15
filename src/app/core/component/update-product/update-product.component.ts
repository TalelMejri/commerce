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
  id?:number;
  libelle_product:String="";
  prix?:number;
  product:Product=new Product();
  private sub: any;
  error:String="";
  constructor(private route:ActivatedRoute,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.sub = this.route.params.subscribe(params => {
    this.id = +params['id'];
    this.libelle_product=params['libelle'];
    this.prix=+params['prix'];
  })
  this.updatedproduct();
  }

  updatedproduct(){
    this.productService.updatedproduct(this.product).subscribe(p=>{
      this.product=p;
      this.router.navigate(['']);
  })
}


}

