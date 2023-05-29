import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validator } from '@angular/forms';
import { ReportMisService} from './report-mis.service';

@Component({
  selector: 'app-report-mis',
  templateUrl: './report-mis.component.html',
  styleUrls: ['./report-mis.component.css']
})
export class ReportMisComponent implements OnInit{
  reportmis:any;

  constructor(private reportmisservice:ReportMisService, private fb: FormBuilder
  
  ){

  }

  ngOnInit(): void {
     this.reportmisservice.getreportmis().subscribe((results:any)=>{
      this.reportmis=results;
      
     })   
    
  }

}
