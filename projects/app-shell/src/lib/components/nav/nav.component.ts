import { Component, computed, inject, input } from '@angular/core';
import { NavLink } from '../../interfaces/nav-link.interface';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ViewportService } from '../../services/viewport.service';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'shell-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  standalone: true,
  imports: [
    RouterLink, MatButtonModule, MatIconModule, MatTooltipModule,
    MatMenuModule, MatToolbarModule
  ]
})
export class NavComponent {
  private readonly _viewport = inject(ViewportService);
  readonly isMobile = this._viewport.isMobile;
  readonly navLinks = input.required<NavLink[]>();
  readonly links = computed(() => {
    if (this.isMobile()) {
      return this.navLinks().slice(0, 3);
    }
    return this.navLinks();
  });
  readonly moreLinks = computed(() => {
    if (this.isMobile()) {
      return this.navLinks().slice(3);
    }
    return null;
  })
}