import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EatsMenu } from './Components/eat-menu/eat-menu.component';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private drinkUrl: string = '/assets/json/drinks.json';
  private foodUrl: string = '/assets/json/eats.json';

  constructor(private http: HttpClient) { }

  public getFoodMenu(): Observable<EatsMenu> {
    return this.http.get<EatsMenu>(this.foodUrl);
  }

  public getDrinkMenu(): Observable<any> {
    return this.http.get(this.drinkUrl);
  }
}
