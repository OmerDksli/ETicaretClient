import { Component } from '@angular/core';
import { FooterComponent } from "./compenets/footer/footer.component";
import { HeaderComponent } from "./compenets/header/header.component";
import { SidebarComponent } from './compenets/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { MatSidenavModule} from '@angular/material/sidenav';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, SidebarComponent,RouterModule,MatSidenavModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {

}
