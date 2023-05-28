import { Injectable } from '@angular/core';
import { Auth, User } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, map } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return this.auth.isLogged$.pipe(
      map((isLogged: boolean) => {
        const userHeadToAccounts = state.url.endsWith('account');
        if (userHeadToAccounts) {
          return isLogged || this.router.createUrlTree(['/signin']);
        }
        return !isLogged || this.router.createUrlTree(['/account']);
      })
    );
  }
}
