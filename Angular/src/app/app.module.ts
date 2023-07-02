import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { Location } from '@angular/common';
import { AuthGuard } from './auth.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { signupService } from 'src/Services/signup.services';
import { LongtextPipe } from 'src/longtext.pipe';
import { DoctorRequestComponent } from './doctor-request/doctor-request.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { UpdateDoctorDetailsComponent } from './update-doctor-details/update-doctor-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { BookComponent } from './book/book.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DoctorRequestComponent,
    DoctorDetailsComponent,
    UpdateDoctorDetailsComponent,
    HomePageComponent,
    AppointmentBookingComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [signupService],
  bootstrap: [AppComponent],

})
export class AppModule { }
