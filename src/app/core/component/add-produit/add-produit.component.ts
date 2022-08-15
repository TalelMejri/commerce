import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/shared/model/Product';
import { ProductService } from '../../services/api/product.service';

@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css']
})
export class AddProduitComponent implements OnInit {

  product:Product=new Product();
  error:String="";
  constructor(private productservice: ProductService,private router:Router ) { }

  ngOnInit(): void {
    //this.addproduct();
  }

  addproduct(){
    this.productservice.addproduct(this.product).subscribe(
     data =>{this.product=data
        this.router.navigate(['']);
    },
     err => {this.error=err.error.errorMessage},
     () =>  {console.log('yay')})
  }
}
