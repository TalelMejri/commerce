import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsulteAllProductComponent } from './component/consulte-all-product/consulte-all-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProduitComponent } from './component/add-produit/add-produit.component';
import { RouterModule } from '@angular/router';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { DeleteproductComponent } from './component/deleteproduct/deleteproduct.component';
@NgModule({
  declarations: [
    ConsulteAllProductComponent,
    AddProduitComponent,
    UpdateProductComponent,
    DeleteproductComponent
  ],
  imports: [
    CommonModule,
    FormsModule,HttpClientModule,
    RouterModule
  ],
  //export t5ali laabed yesta3emlohom
  exports: [
    ConsulteAllProductComponent,AddProduitComponent,UpdateProductComponent
  ]
})
export class CoreModule { }
