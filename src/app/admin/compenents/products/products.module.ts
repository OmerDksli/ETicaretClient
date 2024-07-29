import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProductsComponent
  ],
  exports:[ProductsComponent]
})
export class ProductsModule { }
