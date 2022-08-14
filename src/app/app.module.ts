import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { ConsulteAllProductComponent } from "./core/component/consulte-all-product/consulte-all-product.component";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent,
    //ConsulteAllProductComponent
  ],
  //import module
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//tnajem direct t3ayet coremodule likbiir wala kol component wa7dou
