import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationResult } from 'firebase/auth';
import { Subject, tap, switchMap, combineLatest, of } from 'rxjs';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  public showVerification = false;
  private _submitCode$ = new Subject<string>();
  constructor(private authService: AuthService, private router: Router) { }

  public onSubmit(phone: string) {
    this.authService.logIn(phone).pipe(
      tap(() => this.showVerification = true),
      switchMap((confirmationResult: ConfirmationResult) => combineLatest([this._submitCode$, of(confirmationResult)])),
      switchMap(([submitCode, confirmationResult]) => confirmationResult.confirm(submitCode)),
      tap(() => this.router.navigate(['/account']))
    ).subscribe()
  }

  public onCodeSubmit(input: HTMLInputElement): void {
    this._submitCode$.next(input.value);
    input.value = '';
  }
}
