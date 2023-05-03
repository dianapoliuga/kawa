import { style } from '@angular/animations';
import { _isTestEnvironment } from '@angular/cdk/platform';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // color='#4C4444';

  resetColor() {
    const test2 = document.querySelectorAll<HTMLElement>(`.header-main-items`);
    test2[0].style.color = '#4C4444';
    test2[1].style.color = '#4C4444';
    test2[2].style.color = '#4C4444';
  }

  updateColor(id: string) {
    this.resetColor();
    const test = document.querySelectorAll<HTMLElement>(`#${id}`);
    test[0].style.color = '#9A9C8A';
  }
}
