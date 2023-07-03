import { Component } from '@angular/core';
import { doctorService } from 'src/Services/Doctor.service';

@Component({
  selector: 'app-update-doctor-details',
  templateUrl: './update-doctor-details.component.html',
  styleUrls: ['./update-doctor-details.component.css']
})
export class UpdateDoctorDetailsComponent {
  doctorId= localStorage.getItem("UserID");
  request: any;
  DoctorRegister: { specialization: any; experiance: any; requeststatus: string; availability: string; location: any; phone: any; } | undefined;
  // DoctorRegister: { specialization: string; experiance: number; requeststatus: string; availability: string; location: string; phone: number; };

  constructor( private doctorservice:doctorService){
  
    this.getDoctor(this.doctorId);
   

  }

  

  getDoctor(doctorId:any){


    this.doctorservice.DoctorDetail(doctorId).subscribe((result: any) => {
      this.request = result;
      console.log(this.request);
    });
    this.DoctorRegister={
     
      specialization:this.request.specialization,
      experiance:this.request.experiance,
      requeststatus:"",
      availability:"Available",
     
      location:this.request.location,
      phone:this.request.phone
    }
    console.log(this.DoctorRegister);
    
  }
 
}
export class DoctorupdateModel
{

         specialization:string=" ";
         experiance:number=0;
         requeststatus:string="request";
         availability:string="";
        
         location:string="";
         phone:number=0;
          

}
