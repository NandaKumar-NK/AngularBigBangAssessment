import { Component } from '@angular/core';
import { signupService } from 'src/Services/signup.services';
import { UserDTOModel } from 'src/Models/UserDTO.model';

import { LoggedInUserModel } from 'src/Models/LoggedInUser.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  userDTO:UserDTOModel
  loggedInUser:LoggedInUserModel
  
showerror=false;
  constructor(private signupService : signupService, private router : Router){
    this.userDTO=new UserDTOModel();
    this.loggedInUser=new LoggedInUserModel

  }

 

  Login(){


    if(this.userDTO.id!='' || this.userDTO.password!=''){
    this.signupService.userLogin(this.userDTO).subscribe(data=>{
      
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("UserID",this.loggedInUser.id);
      localStorage.setItem("role",this.loggedInUser.role);
      localStorage.setItem("login", new Date().toDateString());
      alert("Login Successful")
      
        
        this.router.navigate(['home']).then(() => {
          // Optional: Scroll to the top of the page
          window.scrollTo(0, 0);
          location.reload();
      });
    

    },
    err=>{
      console.log(err)
      alert("Invalid Username/password")
    });
  }else{
    alert("Please fill all the fileds")
  }
  }

  move(){
    this.router.navigateByUrl('register');
  }
}
