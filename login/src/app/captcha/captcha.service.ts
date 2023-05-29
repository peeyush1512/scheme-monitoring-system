import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  getcaptchaurl="http://localhost:3001/captcha/captcha";

  constructor( private http: HttpClient) { }

  getcaptcha(){

    return this.http.get(this.getcaptchaurl);
  }
}
