import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUserModel } from 'src/Models/LoggedInUser.model';
import { signupService } from 'src/Services/signup.services';
import { Location } from '@angular/common';
import { doctorService } from 'src/Services/Doctor.service';

@Component({
  selector: 'app-doctor-request',
  templateUrl: './doctor-request.component.html',
  styleUrls: ['./doctor-request.component.css']
})
export class DoctorRequestComponent {

  public request: any;
  loggedInUser:LoggedInUserModel;
  registration_status = false;

  register: { id: string; email: string; firstName: string; lastName: string; gender: string; role: string; password: string; hashKey: string; passwordClear: string; location:string;phone:number;};
  constructor(private router :Router , private docservice : doctorService,private service:signupService ,private location: Location) { 
    this.register =
    {
      id:"",
      email:"",
      firstName: "",
      lastName: "",
      gender: "",
      role: "",
      password: "",
      hashKey: "",
      passwordClear: "",
      location:"",
      phone:0
    }
    this.loggedInUser=new LoggedInUserModel();
  }

  ngOnInit(): void {
    this.getrequests();
  }
  handlePost(req:any)
  {
    this.register.id=req.id;
    this.register.email=req.email;
    this.register.firstName=req.firstName;
    this.register.lastName=req.lastName;
    this.register.role=req.role;
    this.register.gender=req.gender;
    this.register.passwordClear=req.password;
    this.register.location=req.location;
    this.register.phone=req.phone;
    
    req.requestStatus="Accepted";
   
     this.handleUpdate(req);

    this.service.signup(this.register).subscribe(data=>{
      console.log("register in component")
      
      
    },
    err=>{
      console.log(err)
    });
    
}

handleUpdate(req:any){
  this.docservice.DoctorStatus(req.id,req).subscribe(data=>{
    console.log("Doctor Status updated",req);
    alert("Doctor Updated Successfully!!!")
    window.location.reload();
  })
  
}
  

  handleDelete(id:string,req:any){
    this.docservice.DeleteRequest(id,req).subscribe(data=>{
      console.log("Doctor request deleted")
      window.location.reload();
    })
     

     
    
  }

  private getrequests(): void {
    this.docservice.getrequest().subscribe(result => {
      this.request = result;
      console.log(this.request);
    });
    
  }

}
