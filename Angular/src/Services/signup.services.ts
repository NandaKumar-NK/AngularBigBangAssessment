import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "../Models/UserDTO.model";
import {Injectable} from '@angular/core';
import { registerModel } from "src/Models/register.model";
import { DoctorregisterModel } from "src/app/register/register.component";

@Injectable()
export class signupService{
    constructor(private httpClient:HttpClient){

    }

    signup(register:registerModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7192/api/User/Register",register);
    }

    userLogin(userDTO:UserDTOModel){
        return this.httpClient.post("https://localhost:7192/api/User/Login",userDTO);
    }
    

    Doctorsignup(register:DoctorregisterModel){
        console.log("register in servive")
        return this.httpClient.post("https://localhost:7192/api/Doctor",register);
    }

    getrequest(){
        return this.httpClient.get("https://localhost:7192/api/Doctor");
    }

    DoctorStatus(id:string,req:DoctorregisterModel){
        return this.httpClient.put(`https://localhost:7192/api/Doctor?id=`+id,req);
    }

    DeleteRequest(req:DoctorregisterModel){
        return this.httpClient.delete("https://localhost:7192/api/Doctor",{ params: { id: req.id } });

    }
}