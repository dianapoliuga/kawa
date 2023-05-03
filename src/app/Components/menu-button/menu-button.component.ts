import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {
  // color1='#FFFFFF'
  // color2='#9DD016'

  constructor(private router: Router) {
  }

  goToEats(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  goToDrinks(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }

  resetColor() {
    const test2 = document.querySelectorAll<HTMLElement>(`.drinkGrid-topButton-top`);
    test2[0].style.color = '#FFFFFF';
    test2[0].style.backgroundColor = '#9DD016';
    test2[1].style.color = '#9DD016';
    test2[1].style.backgroundColor = '#FFFFFF';
  }

  updateColor(id: string) {
    this.resetColor();
    const test = document.querySelectorAll<HTMLElement>(`#${id}`);
    test[0].style.color = '#9DD016';
    test[0].style.backgroundColor = '#FFFFFF'
    test[1].style.color = '#FFFFFF';
    test[1].style.backgroundColor = '#9DD016'
  }

}
