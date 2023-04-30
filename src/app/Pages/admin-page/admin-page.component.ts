import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {
  title = 'Admin page';
  myQR: any;
  getValue(val: string) {
    console.warn(val);
    this.myQR = val;
  };
}

