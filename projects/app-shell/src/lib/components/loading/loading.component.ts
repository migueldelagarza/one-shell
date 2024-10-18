import { Component, computed, inject } from "@angular/core";
import { LoadingService } from "../../services/loading.service";
import { MatProgressBarModule } from "@angular/material/progress-bar";

@Component({
  standalone: true,
  selector: 'shell-loading',
  template: `
  <mat-progress-bar [mode]="progressMode()"></mat-progress-bar>
  `,
  styleUrl: './loading.component.css',
  imports: [MatProgressBarModule]
})
export class PreloadComponent {
  private readonly _loadingService = inject(LoadingService);
  progressMode = computed(() => this._loadingService.isLoading() ? 'indeterminate': 'determinate');
}