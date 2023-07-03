import { HttpClient } from "@angular/common/http";
import { UserDTOModel } from "../Models/UserDTO.model";
import {Injectable} from '@angular/core';
import { registerModel } from "src/Models/register.model";
import { DoctorregisterModel } from "src/app/register/register.component";
import { AppointmentModel } from "src/app/book/book.component";

@Injectable()
export class patientService{
    constructor(private httpClient:HttpClient){

    }
}
