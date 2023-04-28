import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoyaltyprogramPageComponent } from './loyaltyprogram-page/loyaltyprogram-page.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { ReservationPageComponent } from './reservation-page/reservation-page.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MainPageComponent},
  {path: 'menu', component: MenuPageComponent},
  {path: 'reservation', component: ReservationPageComponent},
  {path: 'loyalty-program', component: LoyaltyprogramPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
