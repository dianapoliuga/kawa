import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.css']
})
export class MenuButtonComponent {
  
  constructor(private router: Router) {
  }

  goToEats():void {
    this.router.navigate(['/menu/dishes']);
    // this.changeColorBtn1();
  }

  changeColorBtn1() {
      const test2 = document.querySelectorAll<HTMLElement>(`.drinkGrid-topButton-top`);
      test2[1].style.color = '#FFFFFF';
      test2[1].style.backgroundColor = '#9DD016';
      test2[0].style.color = '#9DD016';
      test2[0].style.backgroundColor = '#FFFFFF';
  }
    
  goToDrinks():void {
    this.router.navigate(['/menu/drinks']);
    // this.changeColorBtn0();
  }

  changeColorBtn0() {
    const test2 = document.querySelectorAll<HTMLElement>(`.drinkGrid-topButton-top`);
    test2[0].style.color = '#FFFFFF';
    test2[0].style.backgroundColor = '#9DD016';
    test2[1].style.color = '#9DD016';
    test2[1].style.backgroundColor = '#FFFFFF';
  }

  invokeFunctionsEats() {
    this.goToEats();
    this.changeColorBtn1();
  }
  invokeFunctionsDrinks() {
    this.goToDrinks();
    this.changeColorBtn0();
  }
  // resetBtnColor() {
  //   const test2 = document.querySelectorAll<HTMLElement>(`.drinkGrid-topButton-top`);
  //   test2[1].style.color = '#9DD016';
  //   test2[1].style.backgroundColor = '#FFFFFF';
  //   test2[0].style.color = '#9DD016';
  //   test2[0].style.backgroundColor = '#FFFFFF';

   
  // }

  // updateBtnColor(id: string) {
  //   this.resetBtnColor();
  //   let test = document.querySelectorAll<HTMLElement>(`#${id}`);
  //   test[0].style.color = '#FFFFFF';
  //   test[0].style.backgroundColor = '#9DD016';
  //   console.log(test[0]);
  // }

}