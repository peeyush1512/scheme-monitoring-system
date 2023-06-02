import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ForgetService {
  url1="http://localhost:3001/apis/getuser/"
  url2="http://localhost:3001/apis/forget"
  constructor(private http : HttpClient) { }

  public getuser(data :any){
    return this.http.get(this.url1+data);
  }
  public otp(data :any){
    return this.http.post(this.url2,data);
  }
}
