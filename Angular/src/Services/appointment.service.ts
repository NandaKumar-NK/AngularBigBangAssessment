import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "../Models/UserDTO.model";
import {Injectable} from '@angular/core';
import { registerModel } from "src/Models/register.model";
import { DoctorregisterModel } from "src/app/register/register.component";
import { AppointmentModel } from "src/app/book/book.component";
import { AppointmentupdateModel } from "src/app/feedback/feedback.component";
import { AppointmentupdateprescriptionModel } from "src/app/prescription/prescription.component";

@Injectable()
export class appointmentService{
    constructor(private httpClient:HttpClient){

    }

    bookappointment(book:AppointmentModel){
        return this.httpClient.post("https://localhost:7192/api/Appointments",book);

    }

    getAppointmentsdetails(){
        return this.httpClient.get("https://localhost:7192/api/Appointments");
    }

    getUserAppointmentsdetails(id:any){
        return this.httpClient.get("https://localhost:7192/api/Appointments/"+id);
    }


    updatefeedback(data:number,request:AppointmentupdateModel){
        return this.httpClient.put("https://localhost:7192/api/Appointments/"+data,request);

    }

    updatePrescription(data:number,request:AppointmentupdateprescriptionModel){
        return this.httpClient.put("https://localhost:7192/api/Appointments/Prescription/"+data,request);
    }
}
