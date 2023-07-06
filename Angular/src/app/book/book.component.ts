import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { doctorService } from 'src/Services/Doctor.service';
import { appointmentService } from 'src/Services/appointment.service';
import { signupService } from 'src/Services/signup.services';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() data?: any;
  appointment!:any;
  DoctorRegister!:any;


  constructor(private service:appointmentService,private docService:doctorService,router: Router) {
    console.log(this.data);
   this.appointment={
     appointmentId:0,
     patientId:"",
     doctorId:"",
     date:"",
     timeSlot:"",
     details:"",
     medicalInfo:"",
     feedback:""
    
   }
    
 

 
 

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
  

  
  ngOnInit(): void
  {

    this.docService.getDoctors().subscribe(detils=>this.DoctorRegister=detils);

   
  }
   
    
  
  
  Book(book:any){
    this.appointment.patientId=localStorage.getItem('UserID');
   this.appointment.doctorId=this.data;


    this.service.bookappointment(this.appointment).subscribe((trainer: any) => console.log(trainer));
    if(confirm(" Appointment booked successfully "))
    {
      window.location.reload();
    }
  }


 
   }
   export class AppointmentModel{
    appointmentId:number=0;
    patientId:string="";
    doctorId:string="";
    date:string=""
    timeSlot:string="";
    details:string="";
    medicalInfo:string="";
    feedback:string="";
   }


