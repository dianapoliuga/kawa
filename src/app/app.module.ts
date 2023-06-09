import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { QRCodeModule } from 'angularx-qrcode';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
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
import { DrinkMenuComponent } from './Components/drink-menu/drink-menu.component';
import { EatMenuComponent } from './Components/eat-menu/eat-menu.component';
import { MenuButtonComponent } from './Components/menu-button/menu-button.component';
import { RegistrationComponent } from './Components/registration/registration.component';
import { QrCodeComponent } from './Components/qr-code/qr-code.component';
import { SignInComponent } from './Components/sign-in/sign-in.component';
import { SignInPageComponent } from './Pages/sign-in-page/sign-in-page.component';
import { AdminButtonsComponent } from './Components/admin-buttons/admin-buttons.component';
import { ClientsTableComponent } from './Components/clients-table/clients-table.component';
import { ReservationApprovedComponent } from './Components/reservation-approved/reservation-approved.component';
import { ProfileComponent } from './Components/profile/profile.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatMenuModule} from '@angular/material/menu';
import { DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';

import {  provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideDatabase,getDatabase } from '@angular/fire/database';

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
    DrinkMenuComponent,
    EatMenuComponent,
    MenuButtonComponent,
    RegistrationComponent,
    QrCodeComponent,
    SignInComponent,
    SignInPageComponent,
    AdminButtonsComponent,
    ClientsTableComponent,
    ReservationApprovedComponent,
    ProfileComponent,

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
    MatSnackBarModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    FormsModule,
    MatDatepickerModule,
    MatMenuModule,
    DateTimePickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
