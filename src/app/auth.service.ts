import { Injectable } from '@angular/core';
import {
  Auth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  updateProfile,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ReplaySubject, catchError, from, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLogged$ = new ReplaySubject<boolean>(1);

  constructor(private auth: Auth, private router: Router) {
    this.auth.onAuthStateChanged((user) => {
      console.log(user);
      this.isLogged$.next(!!user);
    });
  }

  public logIn(phone: string) {
    const verifier = new RecaptchaVerifier(
      'recaptcha',
      { size: 'invisible' },
      this.auth
    );
    return from(signInWithPhoneNumber(this.auth, phone, verifier)).pipe(
      tap(() => verifier.clear()),
      catchError((e) => {
        verifier.clear();
        return throwError(() => e);
      })
    );
  }

  public logOut() {
    return from(this.auth.signOut()).pipe(
      tap(() => this.router.navigate(['/signin']))
    );
  }

  public updateUser(displayName: string) {
    return updateProfile(this.auth.currentUser, { displayName });
  }
}
