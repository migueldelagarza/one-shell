import { computed, Injectable, signal } from "@angular/core";

@Injectable({providedIn: 'root'})
export class LoadingService {
  private readonly _isLoading = signal(false);
  readonly isLoading = computed( () => this._isLoading());

  startLoading(): void {
    this._isLoading.set(true);
  }

  stopLoading(): void {
    this._isLoading.set(false);
  }
}