import { Component, OnInit } from '@angular/core';
import {ChangepasswordService  } from './changepassword.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit{

  changepassword!:FormGroup;

  constructor( private fb : FormBuilder,private service1:ChangepasswordService,
    private toastr:ToastrService) { }


    ngOnInit(): void {
      this.changepassword= this.fb.group({
        oldpassword:['',[Validators.required]],
        newpassword: ['', [Validators.required,Validators.pattern('((?=.*[0-9])(?=.*[@#])(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],
        repassword:['',[Validators.required]]
      })
      
    }

    changepasswordsubmit(){

      if(!this.changepassword.invalid){
        const jsondata={
          oldpassword:this.changepassword.controls['oldpassword'].value,
          newpassword:this.changepassword.controls['newpassword'].value,
          repassword:this.changepassword.controls['repassword'].value
        }
        // this.service1.changepassword(jsondata).subscribe((result:any)=>{
        //   if(result.message){
        //     this.toastr.error(result.message);
        //   }
        //   else{
        //     this.toastr.success("your password successfully change")

        //   }
        // })

      }else{

      }
      
    }
    

}
