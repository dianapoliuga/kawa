import { Component } from '@angular/core';

@Component({
  selector: 'app-qr-code',
  templateUrl: './qr-code.component.html',
  styleUrls: ['./qr-code.component.css']
})
export class QrCodeComponent {
  title = 'Admin page';
  myQR: any;
  getValue(val: string) {
    console.warn(val);
    this.myQR = val;
  };
}
