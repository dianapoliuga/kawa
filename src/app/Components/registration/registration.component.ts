import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { auth, db, storage } from '../../Config/config';
import { BehaviorSubject, Subject, combineLatest, delayWhen, of, switchMap, tap } from 'rxjs';
import { ConfirmationResult } from 'firebase/auth';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  public showVerification = false;
  private _submitCode$ = new Subject<string>();
  constructor(private authService: AuthService, private router: Router) { }

  public onSubmit(phone: string, name: string) {
    this.authService.logIn(phone).pipe(
      tap(() => this.showVerification = true),
      switchMap((confirmationResult: ConfirmationResult) => combineLatest([this._submitCode$, of(confirmationResult)])),
      switchMap(([submitCode, confirmationResult]) => confirmationResult.confirm(submitCode)),
      switchMap(() => this.authService.updateUser(name)),
      tap(() => this.showVerification = false),
      tap(() => this.router.navigate(['/account']))
    ).subscribe()
  }

  public onCodeSubmit(input: HTMLInputElement): void {
    this._submitCode$.next(input.value);
    input.value = '';
  }
}
