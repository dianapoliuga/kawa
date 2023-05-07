import { Component, Input } from '@angular/core';

export interface DrinkEntity {
  id: Number;
  photo: String;
  cardTitle: String;
  price: Number;
  currency: String;
}

export interface DrinksMenu {
  hotDrinks: DrinkEntity[];
  coldDrinks: DrinkEntity[];
}

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.css']
})
export class DrinkMenuComponent {
  @Input() public drinkMenu: DrinksMenu;
}
