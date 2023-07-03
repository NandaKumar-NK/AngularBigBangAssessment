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
  

  constructor(private signupService : signupService, private router : Router){
    this.userDTO=new UserDTOModel();
    this.loggedInUser=new LoggedInUserModel

  }

 

  Login(){

    this.signupService.userLogin(this.userDTO).subscribe(data=>{
      
      this.loggedInUser = data as LoggedInUserModel;
      console.log(this.loggedInUser);
      
      localStorage.setItem("token",this.loggedInUser.token);
      localStorage.setItem("UserID",this.loggedInUser.id);
      localStorage.setItem("role",this.loggedInUser.role);
      localStorage.setItem("login", new Date().toDateString());
      alert("Login Successful")
      setTimeout(() => {
        
        this.router.navigate(['/home']);
      }, 1000);


    },
    err=>{
      console.log(err)
      alert("Invalid Username/password")
    });
  }

  move(){
    this.router.navigateByUrl('register');
  }
}
