import { Component, OnInit, ViewChild } from '@angular/core';
import { LoggedInUserModel } from 'src/Models/LoggedInUser.model';
import { Router } from '@angular/router';
import { signupService } from 'src/Services/signup.services';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
// import validation from '../helper/validation';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('register_form')
  registerForm!: NgForm;
  showError: boolean = false;
  registration_status = false;

  public signup_form!:FormGroup;

   register!:any;
   DoctorRegister!:any;
  loggedInUser:LoggedInUserModel;

  constructor(private router :Router , private signupService : signupService, private fb:FormBuilder)
  {
    // this.register = new registerModel();
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
    this.DoctorRegister={
      id:"",
      email:"",
      firstName: "",
      lastName: "",
      gender: "",
      role: "",
      specialization:" ",
      experiance:0,
      requeststatus:"request",
      availability:"",
      password:"",
      location:"",
      phone:0
    }
  

    
    this.loggedInUser=new LoggedInUserModel();

  }

ngOnInit() {
  this.signup_form = this.fb.group({
    username:['', Validators.required]
  })
}

onRoleChange() {
  if (this.register.role === 'Doctor') {
    this.doctorReg();
  }
}

  addGender(gender:any){
    this.register.gender = gender;
  }
  doctorReg(){
    console.log('Entered')
    console.log(this.register);
    console.log(this.DoctorRegister);
    this.DoctorRegister.id=this.register.id;
    this.DoctorRegister.email=this.register.email;
    this.DoctorRegister.firstName=this.register.firstName;
    this.DoctorRegister.lastName=this.register.lastName;
    this.DoctorRegister.gender=this.register.gender;
    this.DoctorRegister.role=this.register.role;
    this.DoctorRegister.password=this.register.passwordClear;
    this.DoctorRegister.location=this.register.location;
    this.DoctorRegister.phone=this.register.phone;
 
  }

  onPost()
  {
    if (this.registerForm.valid)
    {

      if(this.register.role=="Doctor"){
        this.signupService.Doctorsignup(this.DoctorRegister).subscribe(data=>{
          console.log("register request send to admin")
          setTimeout(() => {
            this.router.navigate(['login']);
          }, 3000);
        })
      }
      else{
      this.signupService.signup(this.register).subscribe(data=>{
        console.log("register in component")
        this.loggedInUser = data as LoggedInUserModel;
        console.log(this.loggedInUser);
        
        localStorage.setItem("token",this.loggedInUser.token);
        localStorage.setItem("UserID",this.loggedInUser.id);
        localStorage.setItem("role",this.loggedInUser.role);
        this.registration_status = true;
        setTimeout(() => {
          this.router.navigate(['login']);
        }, 3000);
        // alert(`\t ........Registration successfull........
        //   \n your user id is : ${this.loggedInUser.id} and your password is first 4 letters of your name + your birth date and month `);
      
      },
      err=>{
        console.log(err)
      });
    }
    }
    else 
    {
      this.showError = true; // Show the error message
    }

    
    }
  

  login_here()
  {
    this.router.navigateByUrl('login');
  }
}


export class registerModel
{

         id:string="";
         email:string="";
         firstName: string="";
         lastName: string="";
         gender: string="";
         role: string="";
         password: string="";
         hashKey: string="";
         passwordClear: string="";
         location:string="";
         phone:number=0;

}
export class DoctorregisterModel
{

         id:string="";
         email:string="";
         firstName: string="";
         lastName: string="";
         gender: string="";
         role: string="";
         specialization:string=" ";
         experiance:number=0;
         requeststatus:string="request";
         availability:string="";
         password:string="";
         location:string="";
         phone:number=0;

}
