import { Component, computed, inject, model } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ViewportService } from "../../services/viewport.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'shell-toolbar',
  template: `
  <mat-toolbar>
    @if (isNotMobile()) {
      <button mat-icon-button (click)="toggle()">
        <mat-icon>menu</mat-icon>
      </button>
    }
  </mat-toolbar>
  `,
  styleUrl: './toolbar.component.css',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  standalone: true
})
export class ToolbarComponent {
  fullWidth = model();
  private readonly _viewportService = inject(ViewportService);
  readonly isNotMobile = computed(() => !this._viewportService.isMobile());

  toggle() {
    this.fullWidth.set(!this.fullWidth());
  }
}