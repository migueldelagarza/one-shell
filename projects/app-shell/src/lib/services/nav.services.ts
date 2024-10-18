import { inject, Injectable, Signal, signal } from "@angular/core";
import { NavLink } from "../interfaces/nav-link.interface";
import { ActivatedRoute } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class NavService {
  private readonly activatedRoute = inject(ActivatedRoute);
  private readonly _links = signal<NavLink[]>([]);

  get links(): Signal<NavLink[]> {
    return this._links;
  }

  set links(navLinks: NavLink[]) {
    this._links.set(navLinks);
  }
}