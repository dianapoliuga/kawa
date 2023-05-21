import { Component } from '@angular/core';

@Component({
  selector: 'app-reservation-page',
  templateUrl: './reservation-page.component.html',
  styleUrls: ['./reservation-page.component.css']
})
export class ReservationPageComponent {
  public dateFilter(date: Date): boolean {
    const now = new Date();
    const tenDaysPast = new Date(now);
    tenDaysPast.setDate(now.getDate() + 10);
    const bookedDates: Date[] = [];
    return date > now && date < tenDaysPast && !bookedDates.some((d) => d.getDay() === date.getDay() && d.getMonth() === date.getMonth());
  }
  
}
