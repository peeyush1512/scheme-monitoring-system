import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CaptchaService } from '../../captcha/captcha.service';
import { DemotestService } from '../demotest/demotest.service'
@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css']
})
export class EntrypageComponent implements OnInit {
  [x: string]: any;
  entryForm !:FormGroup;

  getcaptcha:any;

  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  // cityName: any;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private captcha:CaptchaService,
    private service:DemotestService
    ){
      
    }

   
    // changeCity(e: any) {
    //   this.cityName?.setValue(e.target.value, {
    //     onlySelf: true,
    //   });
    // }
    // get cityName() {
    //   return this.entryForm.get('cityName');
    // }

    ngOnInit(): void {

     
      this.service.getdkbssy().subscribe((result:any)=>{
        console.log(result.message);
        
      })
      // this.entryForm = this.formBuilder.group({
      //   cityName: ['', [Validators.required]],
      // });
      // this.captchaload();
    
    }
    // public captchaload() {
    //   this.captcha.getcaptcha().subscribe((getcaptcha:any)=>{
    //     this.getcaptcha=getcaptcha;
    //   })
    // }
    // public entrydata() {
    //   console.log(this.entryForm.controls['cityName'].value);
    // }

}
