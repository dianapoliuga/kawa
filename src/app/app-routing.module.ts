import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';
import { LoyaltyprogramPageComponent } from './Pages/loyaltyprogram-page/loyaltyprogram-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { ReservationPageComponent } from './Pages/reservation-page/reservation-page.component';
import { SignInPageComponent } from './sign-in-page/sign-in-page.component';

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
  { path: 'admin', component: AdminPageComponent },
  { path: 'signin', component: SignInPageComponent },
  // {path: 'menu/drink', component: DrinkMenuComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
