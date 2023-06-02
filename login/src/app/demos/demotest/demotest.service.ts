import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as cryptojs from 'crypto-js';
import {  } from '../../../environments/environment'


@Injectable({
  providedIn: 'root'
})
export class DemotestService {

  url1="http://localhost:3001/apis/dkbssy";
  url2="http://localhost:3001/apis/ayushmaan/";
  url3="http://localhost:3001/apis/sotto";
  url4="http://localhost:3001/crypt/getdata"

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
  public getcrypt(){
      let data=cryptojs.AES.encrypt("peeyush","123").toString();
      this.http.post(this.url4,{"message":data}).subscribe((result)=>{
        console.log(result);
      })
      
      
  }
}
