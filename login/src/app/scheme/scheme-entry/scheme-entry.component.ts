import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SchemeService } from '../scheme.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-scheme-entry',
  templateUrl: './scheme-entry.component.html',
  styleUrls: ['./scheme-entry.component.css']
})
export class SchemeEntryComponent implements OnInit{
 
  scheme!:FormGroup;
  formnotvalid!:boolean;
  getjson:any;
 constructor(private fb: FormBuilder,private schemeservice:SchemeService,
  private toastr :ToastrService){

 }

  ngOnInit(): void {
    this.scheme=this.fb.group({
      schemename:['',[Validators.required]],
      schemeapi:['',[Validators.required]],
    })
  }

  /**
   * schemeadd
   */
  public schemeadd() {
    if(!this.scheme.invalid){
      this.formnotvalid=false;
    this.getjson={
      schemename:this.scheme.controls['schemename'].value,
      schemeapi:this.scheme.controls['schemeapi'].value,
    }
    this.schemeservice.schemeadd(this.getjson).subscribe((results:any)=>{
      if(results.message){
        this.toastr.success(results.message)
      }
      else{
        this.toastr.error(results)
      }
    })
    this.scheme.reset();
    }
    else{
      this.formnotvalid=true;
    }

  }


}
