import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppShellComponent, NavService } from '../../projects/app-shell/src/public-api';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppShellComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  nav = inject(NavService);

  constructor() {
    this.nav.links = [
      { label: 'Home', route: '/home', icon: 'home' },
    ]
  }
}
