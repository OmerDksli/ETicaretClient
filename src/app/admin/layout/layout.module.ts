import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { CompenetsModule } from './compenets/compenets.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutComponent,
    CompenetsModule
  ],
  exports:[LayoutComponent,CompenetsModule]
})
export class LayoutModule { }
