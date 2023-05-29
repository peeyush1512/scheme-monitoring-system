import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImmunizationService {
  
  public hcodelisturl="http://localhost:3001/hospital/gethcode";
  public immunizationentryurl="http://localhost:3001/immunization/addimmunizationentry";
  public immunizationidurl="http://localhost:3001/immunization/getid";

  constructor(private http : HttpClient) { }

  immunizationentry(data : any){
    return this.http.post(this.immunizationentryurl,data)
  }

  gethospitalcode(){
    return this.http.get(this.hcodelisturl);
  }


  getimmunizationid(){
    return this.http.get(this.immunizationidurl);
  }
}
