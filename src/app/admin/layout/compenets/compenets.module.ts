import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    FooterComponent
    
  ],exports:[ HeaderComponent,
    SidebarComponent,
    FooterComponent]
})
export class CompenetsModule { }
