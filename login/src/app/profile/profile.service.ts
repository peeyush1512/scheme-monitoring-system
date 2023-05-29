import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  userurl="http://localhost:3001/user/profile/";
  constructor( private http : HttpClient) { }

  

  public getuserdata( data :any) {
      
      return this.http.get(this.userurl+data);  
  }

}
