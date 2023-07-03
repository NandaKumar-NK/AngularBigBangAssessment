import { Component } from '@angular/core';
import { appointmentService } from 'src/Services/appointment.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent {
  request: any;

  
  constructor(private service:appointmentService) {
   
    this.getAppointments();
  }


  private  getAppointments(): void {
    this.service.getAppointmentsdetails().subscribe((result: any) => {
      this.request = result;
      console.log(this.request);
    });
    
  }
}
