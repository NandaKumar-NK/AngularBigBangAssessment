import { Component, ViewChild } from '@angular/core';
import { appointmentService } from 'src/Services/appointment.service';

@Component({
  selector: 'app-doctor-history',
  templateUrl: './doctor-history.component.html',
  styleUrls: ['./doctor-history.component.css']
})
export class DoctorHistoryComponent {
  [x: string]: any;
  @ViewChild('myModal') modal: any;
  request: any;
doctordata?:any;
appointId?:number;
  
  constructor(private service:appointmentService) {
    this.doctordata=localStorage.getItem("UserID");
    this.getAppointments(this.doctordata);
  }


  private  getAppointments(doctordata:any): void {
    this.service.getUserAppointmentsdetails(this.doctordata).subscribe((result: any) => {
      this.request = result;
      console.log(this.request);
    });
    
  }

  addprescription(req:any){
    this.appointId=req;
  }
}
