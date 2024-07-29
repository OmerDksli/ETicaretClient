import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketsComponent } from './baskets.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BasketsComponent
  ],exports:[BasketsComponent]
})
export class BasketsModule { }
