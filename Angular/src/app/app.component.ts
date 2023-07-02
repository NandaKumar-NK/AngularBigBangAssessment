import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RolebaseAuthentication';
  role: string | null;
  isLoggedIn: boolean=false;
 

  constructor(private router:Router,private authService:AuthService) {
     this.role= localStorage.getItem("role");
     console.log(this.role);
     if(localStorage.getItem("token")){
        this.isLoggedIn=true;
     }
  }
  openRegister(){
    this.router.navigate(["register"]);
  }

  logout(){
    this.isLoggedIn=false;
    this.authService.logout();
   
  }
}
