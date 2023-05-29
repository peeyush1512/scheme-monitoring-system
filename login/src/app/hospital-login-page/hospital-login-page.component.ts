import { Component, OnInit } from '@angular/core';
import { HospitalloginService } from "./hospitallogin.service";

@Component({
  selector: 'app-hospital-login-page',
  templateUrl: './hospital-login-page.component.html',
  styleUrls: ['./hospital-login-page.component.css']
})
export class HospitalLoginPageComponent implements OnInit{

  profiledata:any;
  constructor(private hospital:HospitalloginService){

  }
  ngOnInit(): void {

      localStorage.setItem('id','1');
      this.hospital.getprofile(localStorage.getItem('id')).subscribe((results:any)=>{
        if(results[0].id){
          this.profiledata=results[0];
        }
        else{
            console.log(results);
            
        }
      })
  }

}
