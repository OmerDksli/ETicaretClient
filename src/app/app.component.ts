import { Component} from '@angular/core';
import { RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { UiModule } from './ui/ui.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, AdminModule, UiModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ETicaretClient';
}

