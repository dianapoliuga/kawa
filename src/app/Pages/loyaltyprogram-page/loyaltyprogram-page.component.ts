import { Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-loyaltyprogram-page',
  templateUrl: './loyaltyprogram-page.component.html',
  styleUrls: ['./loyaltyprogram-page.component.css']
})
export class LoyaltyprogramPageComponent {
  ngOnInit() {
    AOS.init();
  }
}
