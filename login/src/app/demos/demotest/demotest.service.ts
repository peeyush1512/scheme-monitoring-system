import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DemotestService {

  url1="http://localhost:3001/apis/dkbssy";
  url2="http://localhost:3001/apis/ayushmaan/";
  url3="http://localhost:3001/apis/sotto";

  constructor(private http : HttpClient) { }

  public getdkbssy(){
    
      return this.http.get(this.url1);
  }
  public getayushmaan(data:any){
     return this.http.get(this.url2+data);
  }
  public getsotto(){
      return this.http.get(this.url3);
  }
}
