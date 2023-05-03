import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router';

interface EatsMenu {  
  id: Number;  
  photo: String;
  cardTitle: String;  
  cardText: String;
  price: Number;  
  currency: String;  
}  

@Component({
  selector: 'app-eat-menu',
  templateUrl: './eat-menu.component.html',
  styleUrls: ['./eat-menu.component.css']
})
export class EatMenuComponent {
  eatmenuData:any;
  url: string = '/assets/json/eats.json';

  constructor(private http: HttpClient, private router: Router) {
  }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
      this.eatmenuData = res;
    });
  }

  goToDrinks(pageName:string):void {
    this.router.navigate([`${pageName}`]);
  }
}
