import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  // encapsulation: ViewEncapsulation.None,
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent {
  // encapsulation: ViewEncapsulation.None;
  drinkmenuData:any;
  url: string = '/assets/json/drinks.json';
  eatmenuData:any;
  url1: string = '/assets/json/eats.json';

  constructor(
    private http: HttpClient, 
    private router: Router
    ) { }

  ngOnInit() {
    this.http.get(this.url).subscribe(res => {
    this.drinkmenuData = res;});
    this.http.get(this.url1).subscribe(res => {
    this.eatmenuData = res;});
  }
  
}
