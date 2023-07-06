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
  DoctorRegister: { specialization: string; experiance: any; requeststatus: string; availability: string; location: any; phone: any; } ;
  // DoctorRegister: { specialization: string; experiance: number; requeststatus: string; availability: string; location: string; phone: number; };

  constructor( private doctorservice:doctorService){
 
    this.getDoctor(this.doctorId);
    this.DoctorRegister={
     
      specialization:"",
      experiance:0,
      requeststatus:"Accepted",
      availability:"Available",
     
      location:"",
      phone:""
    }
   

  }

  updateProfile(request:any){
   
    console.log( request.id);
    console.log(this.DoctorRegister);

    this.doctorservice.DoctorStatus(request.id,this.DoctorRegister)
    .subscribe((pres: any) => console.log(pres));
    if(confirm("Profile Updated successfully!!! "))
    {
     window.location.reload();
    this.getDoctor(this.doctorId);
    }
  }
  

  getDoctor(doctorId:any){

console.log(doctorId);
    this.doctorservice.DoctorDetail(doctorId).subscribe((result: any) => {
      this.request = result;
      console.log(this.request);
      
    });
    console.log(this.request);
    
  }
 
}
export class DoctorupdateModel
{

         specialization:string="";
         experiance:number=0;
         requeststatus:string="";
         availability:string="";
        
         location:string="";
         phone:string="";
          

}
