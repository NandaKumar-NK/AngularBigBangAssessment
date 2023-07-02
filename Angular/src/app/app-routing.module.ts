import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DoctorRequestComponent } from './doctor-request/doctor-request.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { UpdateDoctorDetailsComponent } from './update-doctor-details/update-doctor-details.component';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'doctorRequests',component:DoctorRequestComponent,canActivate:[AuthGuard]},
  {path:'doctors',component:DoctorDetailsComponent,canActivate:[AuthGuard]},
  {path:'doctorDetail',component:UpdateDoctorDetailsComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomePageComponent},
  {path:'appointment',component:AppointmentBookingComponent,canActivate:[AuthGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
