import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: Auth, private router: Router) { }

  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    const userHeadToAccounts = state.url.endsWith('accounts');
    if (userHeadToAccounts) {
      return Boolean(this.auth.currentUser) ?? this.router.createUrlTree(['/signin']);
    }
    return this.auth.currentUser ? this.router.createUrlTree(['/account']) : true;
  }
}
