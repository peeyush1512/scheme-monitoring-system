import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HospitalloginService {
  
  userurl="http://localhost:3001/hospitallogin/profile/"
  constructor( private http:HttpClient) { }

  getprofile(data: any){
     
    return this.http.get(this.userurl+data);

  }


}
