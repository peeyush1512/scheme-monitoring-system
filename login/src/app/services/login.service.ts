import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class LoginService  {

  loginurl ="http://localhost:3001/user/login";
  loginuserurl ="http://localhost:3001/user/loginuser";
  registrationurl="http://localhost:3001/user/registration";
  gettotaluser="http://localhost:3001/user/totaluser";
  getuserdataurl="http://localhost:3001/user/getdata"
  registrationuserurl="http://localhost:3001/user/registrationuser";
  updateuserurl = "http://localhost:3001/user/update";
  url1="http://localhost:3001/login/usertype/";

  constructor( private http: HttpClient) { }

// public temp : any;

//login user
login(data : any ){
        
  return this.http.post(this.loginurl,data);
}
  loginuser(data : any ){
        
    return this.http.post(this.loginuserurl,data);
  }

  getuserdata( ){
        
    return this.http.get(this.getuserdataurl);
  }
  getuser( ){
        
    return this.http.get(this.gettotaluser);
  }
  rolevalidet(data :any){
    return this.http.get(this.url1+data);
  }
  //update user 
  updateuser(data : any ){
    return this.http.post(this.updateuserurl,data)
  }



  //add new user
  registration(data : any ){
    return this.http.post(this.registrationurl,data );
  }
  registrationuser(data : any ){
    return this.http.post(this.registrationuserurl,data );
  }
}
