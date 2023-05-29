import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HospitalLoginService } from './hospital-login.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-hospital-login',
  templateUrl: './hospital-login.component.html',
  styleUrls: ['./hospital-login.component.css',]
})
export class HospitalLoginComponent implements OnInit {
  hospitalloginform!:FormGroup;
  formnotvalid: any;
  hcode: any;
  getjson:any;
  matchpassword:boolean=false;

  constructor(private fb:FormBuilder,
     private hospitalloginservice:HospitalLoginService,
     private toastr :ToastrService){

  }
  ngOnInit(): void {
    this.hospitalloginservice.gethospitalcode().subscribe((results: any) => {
      this.hcode = results;
    })
    this.hospitalloginform=this.fb.group({      
      hospitalcode: ['', [Validators.required]],
      noofopd: ['', [Validators.required]],
      noofipd: ['', [Validators.required]],
      totalbedoccupied: ['', [Validators.required]],
      totalayushman: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.pattern('((?=.*[0-9])(?=.*[@#])(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
      repassword: ['', [Validators.required]],
      mobile: ['', [Validators.required,Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required,Validators.email]]
    })
  }

  public matchpass(){
    if(this.hospitalloginform.controls['password'].value == this.hospitalloginform.controls['repassword'].value){
      this.matchpassword=false;
    }else{
      this.matchpassword= true;
    }
  }

  public submit(){
    
    if(!this.hospitalloginform.invalid){
      this.formnotvalid=false;
      this.getjson={
        hospitalcode: this.hospitalloginform.controls['hospitalcode'].value,
        noofopd:this.hospitalloginform.controls['noofopd'].value ,
        noofipd:this.hospitalloginform.controls['noofipd'].value ,
        totalbedoccupied:this.hospitalloginform.controls['totalbedoccupied'].value ,
        totalayushman:this.hospitalloginform.controls['totalayushman'].value,
        mobile:this.hospitalloginform.controls['mobile'].value ,
        email:this.hospitalloginform.controls['email'].value ,
        password:this.hospitalloginform.controls['password'].value ,
        repassword:this.hospitalloginform.controls['repassword'].value
      }
      this.hospitalloginservice.adddata(this.getjson).subscribe((results: any) => {
        if(results.message){
          this.toastr.success(results.message)
        }
        else{
          this.toastr.error(results.message)
        }
      })
      
      this.hospitalloginform.reset();
    }else{
      this.formnotvalid=true;
    }
  
  }

}
