import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { doctorService } from 'src/Services/Doctor.service';
import { signupService } from 'src/Services/signup.services';

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.css']
})
export class AppointmentBookingComponent implements OnInit {
  [x: string]: any;
  @ViewChild('myModal') modal: any; 
  // Add this line
  search!:string ;
  DoctorRegister!:any;
  condition:boolean=false;
  filteredCourses?: DoctorregisterModel;

  openModal() {
    this.modal.nativeElement.style.display = 'block'; // Show the modal
  }
  constructor(private doctordet:doctorService,router: Router) {

    this.DoctorRegister={
      id:"",
      email:"",
      firstName: "",
      lastName: "",
      gender: "",
      role: "",
      specialization:" ",
      experiance:0,
      requeststatus:"",
      availability:"",
      password:"",
      location:"",
      phone:0
    }
   }
  

  selectedDoctorId!: string;

  ngOnInit(): void
  {
    this.doctordet.getDoctors().subscribe(detils=>this.DoctorRegister=detils);  
  }
  

  bookAppointment(c:any){
    this.selectedDoctorId = c.id;
  
  console.log(this.selectedDoctorId);
  }
  

}
  
export class DoctorregisterModel
{

         id:string="";
         email:string="";
         firstName: string="";
         lastName: string="";
         gender: string="";
         role: string="";
         specialization:string=" ";
         experiance:number=0;
         requeststatus:string="request";
         availability:string="";
         password:string="";
         location:string="";
         phone:number=0;
          

}

