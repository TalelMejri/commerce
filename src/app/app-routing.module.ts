import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProduitComponent } from './core/component/add-produit/add-produit.component';
import { ConsulteAllProductComponent } from './core/component/consulte-all-product/consulte-all-product.component';
import { UpdateProductComponent } from './core/component/update-product/update-product.component';


const routes: Routes = [
  { path: '', component: ConsulteAllProductComponent },
  { path: 'update/:id/:prix/:libelle', component: UpdateProductComponent },
  { path: 'add', component: AddProduitComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
