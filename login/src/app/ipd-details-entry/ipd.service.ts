import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IpdService {

  public hcodelisturl="http://localhost:3001/hospital/gethcode";
  public ipdentryurl="http://localhost:3001/ipd/addipd";
  public specialitynameurl="http://localhost:3001/speciality/getspecialityname";

  constructor(private http : HttpClient) { }

  ipdentry(data : any){
    return this.http.post(this.ipdentryurl,data)
  }

  gethospitalcode(){
    return this.http.get(this.hcodelisturl);
  }


  getspecialityname(){
    return this.http.get(this.specialitynameurl);
  }

}
