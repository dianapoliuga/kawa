import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminPageComponent } from './Pages/admin-page/admin-page.component';
import { MenuPageComponent } from './Pages/menu-page/menu-page.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { ReservationPageComponent } from './Pages/reservation-page/reservation-page.component';
import { LoyaltyprogramPageComponent } from './Pages/loyaltyprogram-page/loyaltyprogram-page.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminPageComponent,
    MenuPageComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    ReservationPageComponent,
    LoyaltyprogramPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    QRCodeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
