import { Component, Input } from '@angular/core';
import { appointmentService } from 'src/Services/appointment.service';

@Component({
  selector: 'app-prescription',
  templateUrl: './prescription.component.html',
  styleUrls: ['./prescription.component.css']
})
export class PrescriptionComponent {

  @Input() data?: any;
  request: any;
  appointment: {   medicalInfo: string; };

  constructor (private appoint:appointmentService){
    console.log(this.data);
      this.appoint.getAppointmentsdetails().subscribe((result: any) => {
        this.request = result;
        console.log(this.request);
      });


      this.appointment={
        
   
   
    medicalInfo:""
   // feedback:""
       
      }
      
    }
  

    updateMedicalInfo(request:any)
  {
   
console.log(this.appointment,this.data);
    this.appoint.updatePrescription(this.data,this.appointment).subscribe((pres: any) => console.log(pres));
    if(confirm("Prescription added successfully!!! "))
    {
     window.location.reload();
    }
  }
}
export class AppointmentupdateprescriptionModel{
  

  medicalInfo:string="";
 
 }


