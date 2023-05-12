import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  login = '';
  password = '';
  constructor(private router: Router) {}
  onSubmit() {
    if(this.login==='admin'){
      this.router.navigateByUrl('/admin')
      return 
    }
    this.router.navigate(['/account'], {queryParams: {login:this.login, number:this.password}})


  }
}
