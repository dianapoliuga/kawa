import { Component, Input } from '@angular/core';

export interface FoodEntity {
  id: number;
  photo: string;
  cardTitle: string;
  cardText: string;
  price: number;
  currency: string;
}

export interface EatsMenu {
  baking: FoodEntity[];
  dishes: FoodEntity[];
}

@Component({
  selector: 'app-eat-menu',
  templateUrl: './eat-menu.component.html',
  styleUrls: ['./eat-menu.component.css']
})
export class EatMenuComponent {
  @Input() public eatMenu: EatsMenu;
}
