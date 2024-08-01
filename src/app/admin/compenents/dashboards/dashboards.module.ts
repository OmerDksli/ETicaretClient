import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardsComponent } from './dashboards.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardsComponent,
    RouterModule.forChild([{path:"",component:DashboardsComponent}])
  ],exports:[DashboardsComponent]

})
export class DashboardsModule { }
