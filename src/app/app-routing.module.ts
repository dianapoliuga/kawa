import { NgModule } from '@angular/core';
import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';
import { LoyaltyprogramPageComponent } from './Pages/loyaltyprogram-page/loyaltyprogram-page.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { ReservationPageComponent } from './Pages/reservation-page/reservation-page.component';
import { ReservationApprovedComponent } from './Components/reservation-approved/reservation-approved.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { SignInPageComponent } from './Pages/sign-in-page/sign-in-page.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminGuard } from './admin/admin.guard';

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
        component: MenuPageComponent,
      },
    ],
  },
  { path: 'reservation', component: ReservationPageComponent },
  { path: 'loyalty-program', component: LoyaltyprogramPageComponent },
  { path: 'signin', canActivate: [AuthGuard], component: SignInPageComponent },
  { path: 'login', canActivate: [AuthGuard], component: RegistrationComponent },
  {
    path: 'admin',
    canActivate: [AdminGuard],
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
        component: AdminPageComponent,
      },
    ],
  },
  { path: 'reservation/approved', component: ReservationApprovedComponent },
  { path: 'account', canActivate: [AuthGuard], component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
