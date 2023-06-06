import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HospitalloginService {
  
  userurl="http://localhost:3001/hospitallogin/profile/";
  url1="http://localhost:3001/login/usertype/";
  constructor( private http:HttpClient) { }

  getprofile(data: any){
    return this.http.get(this.userurl+data);
  }
  rolevalidet(data :any){
    return this.http.get(this.url1+data);
  }


}
