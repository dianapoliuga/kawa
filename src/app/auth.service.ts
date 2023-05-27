import { Injectable } from '@angular/core';
import { Auth, RecaptchaVerifier, signInWithPhoneNumber } from '@angular/fire/auth';
import { catchError, from, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private auth: Auth) { }

  public logIn(phone: string) {
    const verifier = new RecaptchaVerifier('recaptcha', { size: 'invisible' }, this.auth);
    return from(signInWithPhoneNumber(this.auth, phone, verifier)).pipe(
      tap(() => verifier.clear()),
      catchError((e) => {
        verifier.clear();
        return throwError(() => e);
      })
    )
  }

  public logOut() {
    return from(this.auth.signOut())
  }

  public updateUser(displayName: string) {
    return this.auth.updateCurrentUser({ ...this.auth.currentUser, displayName })
  }
}
