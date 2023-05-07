import { style } from '@angular/animations';
import { _isTestEnvironment } from '@angular/cdk/platform';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  // color='#4C4444';
  // image: any = '/src/assets/img/user.png'

  // menuType:String = 'default';
  // constructor(private router:Router) {  }


  resetColor() {
    const test2 = document.querySelectorAll<HTMLElement>(`.header-main-items`);
    test2[0].style.color = '#4C4444';
    test2[1].style.color = '#4C4444';
    test2[2].style.color = '#4C4444';
    test2[2].style.color = '#4C4444';
  }
  updateColor(id: string) {
    this.resetColor();
    const test = document.querySelectorAll<HTMLElement>(`#${id}`);
    test[0].style.color = '#9A9C8A';
  }

  // ngOnInit():void {
  //   this.router.events.subscribe((val:any) => {
  //     if(localStorage.getItem('menu') && val.url.includes('menu')){
  //       console.warn("this is menu page")
  //       this.menuType='menu'
  //     }else{
  //       this.menuType='default'
  //     }

  //   })
  // }
}
