import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DemotestService } from './demotest.service';
import { CaptchaService } from '../../captcha/captcha.service'
import {formatDate ,DatePipe} from '@angular/common';

import { Color } from '../../../assets/vendor/chart.js/types/types/color';


@Component({
  selector: 'app-demotest',
  templateUrl: './demotest.component.html',
  styleUrls: ['./demotest.component.css'],
  providers: [DatePipe]
})
export class DemotestComponent implements OnInit{
  @ViewChild('captchaelement1') captchaelement1 !:ElementRef ;
  temp1:any;
  temp2:any;
  temp3:any;
  captcha:any;
  // data:any;
  constructor(private service : DemotestService ,private service1: CaptchaService){
  }
  ngOnInit(): void {    
    this.svgCaptcha()
    this.service.getcrypt();
    // console.log(process.env['DB_NAME']);
    

    // this.service1.getcaptcha().subscribe((result:any)=>{
    //   console.log(result);
      
    //   this.captcha=result;
    //   // this.captchaelement.nativeElement.svg;
    //   this.captchaelement1!.nativeElement.innerHtml=this.captcha.data
    //   // this.captchaelement.nativeElement.show=true;
      
      
    // })
    // // this.service.getdkbssy().subscribe((results1:any )=>{
    //   console.log(results1);
    //   this.temp1=results1;
    // })
    // const getjson={
    //   "year":2021
    // };
    // this.service.getayushmaan(2021).subscribe((results2:any )=>{
    //   console.log(results2);
      
    //   this.temp2=results2;
    // })
    
    // this.service.getsotto().subscribe((results3:any )=>{
    //   console.log(results3);
    //   this.temp3=results3;
    // })

  }

  svgCaptcha(){
    this.service1.getcaptcha().subscribe((result:any)=>{
      this.captcha=result;
      this.captchaelement1.nativeElement.innerHTML=this.captcha.data;
      
      
    })
  }
}
