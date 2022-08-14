import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsulteAllProductComponent } from './component/consulte-all-product/consulte-all-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AddProduitComponent } from './component/add-produit/add-produit.component';
@NgModule({
  declarations: [
    ConsulteAllProductComponent,
    AddProduitComponent
  ],
  imports: [
    CommonModule,
    FormsModule,HttpClientModule
  ],
  //export t5ali laabed yesta3emlohom
  exports: [
    ConsulteAllProductComponent,AddProduitComponent
  ]
})
export class CoreModule { }
