import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewportService {
  readonly isMobile = signal(this.checkIsMobile());

  constructor() {
    window.addEventListener('resize', () => this.onResize() );
  }

  private onResize(): void {
    this.isMobile.set(this.checkIsMobile());
  }

  private checkIsMobile(): boolean {
    return window.innerWidth <= 600;
  }
}
