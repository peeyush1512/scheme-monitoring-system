import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SchemeserviceService {
  
  url1="http://localhost:3001/apis/dkbssy";
  url2="http://localhost:3001/apis/ayushmaan/";
  url3="http://localhost:3001/apis/sotto";
  url4="http://localhost:3001/apis/dmeincentive";
  url5="http://localhost:3001/apis/dhsincentive";
  url6="http://localhost:3001/apis/covidincentive";
  urldist="http://localhost:3001/dist/getdistname";

  constructor(private http : HttpClient) { }

  public onlygetdkbssy(){
    
      return this.http.get(this.url1);
  }
  public getdkbssy(data:any){
    
      return this.http.post(this.url1,data);
  }
  public getayushmaan(data:any){
    console.log(this.url2+data);
    
     return this.http.get(this.url2+data);
  }
  public getsotto(){
      return this.http.get(this.url3);
  }
  public getcovidincentive(){
    
      return this.http.get(this.url6);
  }
  public getdmeincentive(){    
     return this.http.get(this.url4);
  }
  public getdhsincentive(){
      return this.http.get(this.url5);
  }
  public getdistname(){
      return this.http.get(this.urldist);
  }
}
