import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UrlSegment } from '@angular/router';
import { map } from 'rxjs';
import { MenuService } from 'src/app/menu.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent {
  constructor(private menuService: MenuService, private route: ActivatedRoute) { }
  public foodMenu$ = this.menuService.getFoodMenu();
  public drinkMenu$ = this.menuService.getDrinkMenu();
  public foodPageIsActive$ = this.route.url.pipe(
    map((url: UrlSegment[]) => url.find((segment) => segment.path === 'dishes'))
  )
}
