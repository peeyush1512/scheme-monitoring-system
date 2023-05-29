import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HospitalLoginService {

  
  public hospitalcodeurl="http://localhost:3001/hospital/gethcode";
  
  public adddataurl="http://localhost:3001/hospitallogin/adddata";
  constructor(private http: HttpClient) { }


  gethospitalcode(){
    return this.http.get(this.hospitalcodeurl);
  }
  adddata(data: any){
    return this.http.post(this.adddataurl,data);
  }
  
}
