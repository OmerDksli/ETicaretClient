import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersComponent
  ],exports:[OrdersComponent]
})
export class OrdersModule { }
