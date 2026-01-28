import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  standalone: true,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss'],
  imports: [RouterOutlet],
  host: {
    'class': 'flex flex-col h-screen w-full overflow-hidden'
  }
})
export class AppComponent {

}
