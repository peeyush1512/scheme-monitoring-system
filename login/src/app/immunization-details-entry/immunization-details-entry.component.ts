import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImmunizationService  } from './immunization.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-immunization-details-entry',
  templateUrl: './immunization-details-entry.component.html',
  styleUrls: ['./immunization-details-entry.component.css']
})
export class ImmunizationDetailsEntryComponent {

  public hospital: any;
  public immunizationid: any;
  public immunizationform!: FormGroup;
  public getjson:any;
  public formnotvalid: any;
  constructor( private formBuilder: FormBuilder,
    private immunizationservice:ImmunizationService,
    private toastr :ToastrService){}

    ngOnInit(): void {
      this.immunizationform = this.formBuilder.group({
        hospitalcode: ['', [Validators.required]],
        entrydate: ['', [Validators.required]],
        noofimmunization: ['', [Validators.required]],
        immunizationid: ['', [Validators.required]]
      });
  
  
      this.immunizationservice.gethospitalcode().subscribe((results: any) => {
        this.hospital = results;
      })
  
      this.immunizationservice.getimmunizationid().subscribe((results: any) => {
        this.immunizationid = results;
      })
  
  
  
    }
    public submit() {
        if(!this.immunizationform.invalid){
        this.formnotvalid=false;
        this.getjson={
          "hospitalcode":this.immunizationform.controls['hospitalcode'].value,
          "entrydate":this.immunizationform.controls['entrydate'].value,
          "noofimmunization":this.immunizationform.controls['noofimmunization'].value,
          "immunizationid":this.immunizationform.controls['immunizationid'].value
        }
      
        
        this.immunizationservice.immunizationentry(this.getjson).subscribe((results:any )=>{
          if(results.message){
            this.toastr.success(results.message)
          }
          else{
            this.toastr.error(results.message)
          }
          
        })
        this.immunizationform.reset();
        }
  
        else{
          this.formnotvalid=true; 
        }
    }


}
