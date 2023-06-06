import { Component, OnInit } from '@angular/core';
import { HospitalloginService } from "./hospitallogin.service";
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-hospital-login-page',
  templateUrl: './hospital-login-page.component.html',
  styleUrls: ['./hospital-login-page.component.scss']
})
export class HospitalLoginPageComponent implements OnInit {

  profiledata: any;
  constructor(private hospital: HospitalloginService, private router: Router,
    private toastr:ToastrService) {

  }
  ngOnInit(){    
    if (localStorage.getItem('user')==null) {
      this.router.navigate(['login']);
    }else {
    this.hospital.rolevalidet(localStorage.getItem('user'))
      .subscribe((result:any)=>{
        if(!result.message){
          this.router.navigate([result.navigate])  
        }
        else{
          this.router.navigate([result.navigate])
        }
      })  
    }

  }


  //FUNCTIONS 
  public logout() {
    localStorage.removeItem('user');
    this.toastr.info("Log Out");
    this.router.navigate(['']);
  }



}
