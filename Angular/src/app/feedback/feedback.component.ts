import { Component, Input } from '@angular/core';
import { appointmentService } from 'src/Services/appointment.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent {
  @Input() data?: any;
  request: any;
  appointment: {   feedback: string; };

  constructor (private appoint:appointmentService){
   
      this.appoint.getAppointmentsdetails().subscribe((result: any) => {
        this.request = result;
        console.log(this.request);
      });


      this.appointment={
        
   
    
    feedback:""
       
      }
      
    }
  

  updatefeedback(request:any)
  {
   
    console.log(this.data);
    this.appoint.updatefeedback(this.data,this.appointment).subscribe((feedbck: any) => console.log(feedbck));
    if(confirm("Feedback added successfully!!! "))
    {
      window.location.reload();
    }
  }
}
export class AppointmentupdateModel{
 
  feedback:string="";
 }
