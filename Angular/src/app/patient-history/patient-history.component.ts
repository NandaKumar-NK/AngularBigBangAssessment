import { Component, ViewChild } from '@angular/core';
import { appointmentService } from 'src/Services/appointment.service';

@Component({
  selector: 'app-patient-history',
  templateUrl: './patient-history.component.html',
  styleUrls: ['./patient-history.component.css']
})
export class PatientHistoryComponent {
  [x: string]: any;
  @ViewChild('myModal') modal: any;
  appointId?:number;
    request: any;
    patientdata?:any;
  
    
    constructor(private service:appointmentService) {
     this.patientdata=localStorage.getItem("UserID");
      this.getAppointments(this.patientdata);
    }
  
    private  getAppointments(patientdata:any): void {
      this.service.getUserAppointmentsdetails(this.patientdata).subscribe((result: any) => {
        this.request = result;
        console.log(this.request);

      });
      
    }
  
    addFeedback(id:number){
      this.appointId=id;
      //console.log(this.appointId);
      console.log(this.patientdata);

    }
  }
  

