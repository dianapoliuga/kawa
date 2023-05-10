import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';
import { LoyaltyprogramPageComponent } from './Pages/loyaltyprogram-page/loyaltyprogram-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { ReservationPageComponent } from './Pages/reservation-page/reservation-page.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { ClientsTableComponent } from './Components/clients-table/clients-table.component';
import { QrCodeComponent } from './Components/qr-code/qr-code.component';
import { ReservationApprovedComponent } from './Components/reservation-approved/reservation-approved.component';
import {RegistrationComponent} from './Components/registration/registration.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainPageComponent },
  {
    path: 'menu',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'drinks',
      },
      {
        matcher: (url: UrlSegment[]) => {
          if (['dishes', 'drinks'].includes(url.at(-1).path)) {
            return { consumed: url };
          }
          return null;
        },
        component: MenuPageComponent
      }
    ]
  },
  { path: 'reservation', component: ReservationPageComponent },
  { path: 'loyalty-program', component: LoyaltyprogramPageComponent },
  { path: 'signin', component: SignInComponent },
  {
    path: 'admin',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'clients',
      },
      {
        matcher: (url: UrlSegment[]) => {
          if (['qr', 'clients'].includes(url.at(-1).path)) {
            return { consumed: url };
          }
          return null;
        },
        component: AdminPageComponent
      }
    ]
  },
  { path: 'reservation/approved', component: ReservationApprovedComponent },
  { path: 'login', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
