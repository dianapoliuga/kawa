import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public isLogged$ = this.auth.isLogged$;
  constructor(private auth: AuthService) {}

  public logOut(): void {
    this.auth.logOut().subscribe();
  }
}
