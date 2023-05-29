import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SchemeService {

  addschemeurl="http://localhost:3001/schemes/addscheme"; 
  getschemeurl="http://localhost:3001/schemes/getschemes"; 
  gettotalurl="http://localhost:3001/schemes/gettotal"; 
  
  constructor(private http:HttpClient) { }

  public schemeadd(data : any){

    return this.http.post(this.addschemeurl,data);
  }
  public getschemes(){

    return this.http.get(this.getschemeurl);
  }
  public gettotal(){

    return this.http.get(this.gettotalurl);
  }
}
