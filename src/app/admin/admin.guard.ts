import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import {
  Observable,
  catchError,
  map,
  of,
  race,
  switchMap,
  throwError,
  timer,
} from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private auth: Auth,
    private router: Router
  ) {}

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    const onLogin$ = this.authService.isLogged$.pipe(map(Boolean));
    const timeout$ = timer(300).pipe(
      switchMap(() => throwError(() => new Error('timeout')))
    );
    return race([onLogin$, timeout$]).pipe(
      map(() =>
        this.auth.currentUser.displayName === 'diana'
          ? true
          : this.router.createUrlTree(['/'])
      ),
      catchError(() => of(false))
    );
  }
}
