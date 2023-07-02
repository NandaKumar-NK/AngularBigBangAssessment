import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { signupService } from 'src/Services/signup.services';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() data?: any;
  appointment!:any;

  constructor(private service:signupService,router: Router) {
    
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
   
    
  }
  
  Book(book:any){
    this.appointment.patientId=localStorage.getItem('UserID');
   this.appointment.doctorId=this.data;
console.log(localStorage.getItem('UserID'),this.data)

    this.service.bookappointment(this.appointment).subscribe((trainer: any) => console.log(trainer));
    if(confirm("Course updated successfully!!! "))
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


