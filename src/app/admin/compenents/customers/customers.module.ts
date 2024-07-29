import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersComponent } from './customers.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CustomersComponent
  ],exports:[CustomersComponent]
})
export class CustomersModule { }