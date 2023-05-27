import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { auth, db, storage } from '../../Config/config';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  constructor (private authService: AuthService) {}

  public onSubmit(phone: string) {
    this.authService.logIn(phone).subscribe()
  }

}
