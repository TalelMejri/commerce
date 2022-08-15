import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/api/product.service';

@Component({
  selector: 'app-deleteproduct',
  templateUrl: './deleteproduct.component.html',
  styleUrls: ['./deleteproduct.component.css']
})
export class DeleteproductComponent implements OnInit {

  constructor(private productservice:ProductService) { }

  ngOnInit(): void {

  }

}
