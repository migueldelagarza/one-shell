import { Component, computed, inject, model } from "@angular/core";
import { MatToolbarModule } from "@angular/material/toolbar";
import { ViewportService } from "../../services/viewport.service";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

@Component({
  selector: 'shell-toolbar',
  template: `
    @if (isNotMobile()) {
      <button mat-icon-button (click)="toggle()">
        <mat-icon>keyboard_arrow_{{iconText()}}</mat-icon>
      </button>
    }
  `,
  styleUrl: './toolbar.component.css',
  imports: [MatToolbarModule, MatIconModule, MatButtonModule],
  standalone: true
})
export class ToolbarComponent {
  readonly fullWidth = model();
  private readonly _viewportService = inject(ViewportService);
  readonly isNotMobile = computed(() => !this._viewportService.isMobile());
  readonly iconText = computed(() => this.fullWidth() ? 'right' : 'left');

  toggle() {
    this.fullWidth.set(!this.fullWidth());
  }
}