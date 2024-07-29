import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompenentsModule } from './compenents/compenents.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CompenentsModule
  ],exports:[CompenentsModule]
})
export class UiModule { }
