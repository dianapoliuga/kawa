import { Injectable } from '@angular/core';
import { Auth, RecaptchaVerifier, signInWithPhoneNumber } from '@angular/fire/auth';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {}, this.auth)

  constructor(private auth: Auth) {
    
  }

  public logIn(phone: string) {
    return from(signInWithPhoneNumber(this.auth, phone, this.recaptchaVerifier))
  }

  public logOut() {
    return from(this.auth.signOut())
  }
}
