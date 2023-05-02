import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface DrinksMenu {  
  id: Number;  
  photo: String;
  cardTitle: String;  
  price: Number;  
  currency: String;  
}  

@Component({
  selector: 'app-drink-menu',
  templateUrl: './drink-menu.component.html',
  styleUrls: ['./drink-menu.component.css']
})
export class DrinkMenuComponent{
  drinkmenuData:any;
  url: string = '/assets/json/drinks.json';

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.drinkmenuData = res;
    });
  }
  
}
