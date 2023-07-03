import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DoctorRequestComponent } from './doctor-request/doctor-request.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
import { AuthGuard } from './auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { AppointmentBookingComponent } from './appointment-booking/appointment-booking.component';
import { HistoryComponent } from './history/history.component';
import { DoctorHistoryComponent } from './doctor-history/doctor-history.component';
import { PatientHistoryComponent } from './patient-history/patient-history.component';
import { UpdateDoctorDetailsComponent } from './update-doctor-details/update-doctor-details.component';

const routes: Routes = [
   {path:'',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'doctorRequests',component:DoctorRequestComponent,canActivate:[AuthGuard]},
  {path:'doctors',component:DoctorDetailsComponent,canActivate:[AuthGuard]},
  {path:'home',component:HomePageComponent},
  {path:'doctorDetail',component:UpdateDoctorDetailsComponent},
  {path:'home/doctorDetail',component:UpdateDoctorDetailsComponent},
  {path:'appointment',component:AppointmentBookingComponent,canActivate:[AuthGuard]},
  {path:'history',component:HistoryComponent,canActivate:[AuthGuard]},
  {path:'doctor-history',component:DoctorHistoryComponent,canActivate:[AuthGuard]},
  {path:'patient-history',component:PatientHistoryComponent,canActivate:[AuthGuard]}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
