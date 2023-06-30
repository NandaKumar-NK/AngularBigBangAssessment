import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoggedInUserModel } from 'src/Models/LoggedInUser.model';
import { signupService } from 'src/Services/signup.services';
import { Location } from '@angular/common';

@Component({
  selector: 'app-doctor-request',
  templateUrl: './doctor-request.component.html',
  styleUrls: ['./doctor-request.component.css']
})
export class DoctorRequestComponent {

  public request: any;
  loggedInUser:LoggedInUserModel;
  registration_status = false;

  register: { id: string; email: string; firstName: string; lastName: string; gender: string; role: string; password: string; hashKey: string; passwordClear: string; };
  constructor(private router :Router , private service : signupService,private location: Location) { 
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
      passwordClear: ""
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
    
    req.requestStatus="Accepted";
console.log(req);

    this.service.signup(this.register).subscribe(data=>{
      console.log("register in component")
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("UserID",this.loggedInUser.id);
      localStorage.setItem("role",this.loggedInUser.role);
      this.registration_status = true;
    
    },
    err=>{
      console.log(err)
    });

    this.service.DoctorStatus(req,req).subscribe(data=>{
      console.log("Doctor Status updated")
      window.location.reload();
    })
  
  
 

}
  

  handleDelete(req:any){
    this.service.DeleteRequest(req).subscribe(data=>{
      console.log("Doctor Status updated")
     
      window.location.reload();
    })
  }

  private getrequests(): void {
    this.service.getrequest().subscribe(result => {
      this.request = result;
      console.log(this.request);
    });
  }

}
