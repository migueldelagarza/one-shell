import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  private readonly snackBar = inject(MatSnackBar);

  info(message: string, duration?: number) {
    this.showMessage(message, 'info-snackbar', duration);
  }

  success(message: string, duration?: number) {
    this.showMessage(message, 'success-snackbar', duration);
  }

  warning(message: string, duration?: number) {
    this.showMessage(message, 'warning-snackbar', duration);
  }

  danger(message: string, duration?: number) {
    this.showMessage(message, 'danger-snackbar', duration);
  }

  private showMessage(message: string, panelClass: string, duration: number = 5000) {
    this.snackBar.open(message, '', {
      duration: duration,
      panelClass: [panelClass],
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}