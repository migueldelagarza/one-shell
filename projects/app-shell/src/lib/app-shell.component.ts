import { Component, inject, signal } from '@angular/core';
import { NavComponent } from './components/nav/nav.component';
import { PreloadComponent } from "./components/loading/loading.component";
import { NavService } from './services/nav.services';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  standalone: true,
  imports: [
    NavComponent, PreloadComponent, MatToolbarModule, MatIconModule,
    CommonModule, ToolbarComponent
  ],
  selector: 'shell-shell',
  template: `
    <shell-loading></shell-loading>
    <div id="container">
      <shell-nav [navLinks]="navLinks()"></shell-nav>
      <div id="appView" [class.full]="fullWidth()">
        <shell-toolbar [(fullWidth)]="fullWidth"></shell-toolbar>
        <ng-content slot="page"></ng-content>
      </div>
    </div>
  `,
  styleUrl: './app-shell.component.css'
})
export class AppShellComponent {
  protected readonly fullWidth = signal(false);
  private readonly _navService = inject(NavService);
  readonly navLinks = this._navService.links;
}
