import { Component } from '@angular/core';
import { FormBuilder, FormGroup,  Validators } from '@angular/forms';
import { ForgetService } from './forget.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-forget',
  templateUrl: './forget.component.html',
  styleUrls: ['./forget.component.css']
})
export class ForgetComponent {
  userform!:FormGroup;
  otpform!:FormGroup;
  newpasswordform!:FormGroup;
  sendflag!:boolean;
  varifyflag!:boolean;
  matchpassword!: boolean;
  otp:any;
  constructor(private fb:FormBuilder,private srvice:ForgetService,
    private service1:ForgetService,private toastr:ToastrService){

  }
  ngOnInit(){
    this.userform=this.fb.group({
      username:['',[Validators.required]]
    })
    this.otpform=this.fb.group({
      otp:['',[Validators.required]]
    })
    this.newpasswordform=this.fb.group({
      password:['',[Validators.required]],
      repassword:['',[Validators.required]],
    })
    this.sendflag=false;
  }


  usersubmit(){    
    if(!this.userform.invalid){
      // const jsondata={
      //   username:this.userform.controls['username'].value
      // }
      this.service1.getuser(this.userform.controls['username'].value).subscribe((result:any )=>{
        if(result.message){
          this.toastr.info(this.userform.value.username+"not valid")
        }
      })
    }
  }
  otpsubmit(){

  }
  newpasswordsubmit(){

  }
  public matchpass(){
    if(this.newpasswordform.controls['password'].value == this.newpasswordform.controls['repassword'].value){
      this.matchpassword=false;
    }else{
      this.matchpassword= true;
    }
  }
}
