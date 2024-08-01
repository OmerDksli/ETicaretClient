import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    OrdersComponent,
    RouterModule.forChild([{path:"",component:OrdersComponent}])
  ],exports:[OrdersComponent]
})
export class OrdersModule { }
