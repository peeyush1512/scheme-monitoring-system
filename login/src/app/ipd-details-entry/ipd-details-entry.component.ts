import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { SchemesService } from './schemes.service';
import { IpdService } from './ipd.service';


import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ipd-details-entry',
  templateUrl: './ipd-details-entry.component.html',
  styleUrls: ['./ipd-details-entry.component.css']
})
export class IpdDetailsEntryComponent implements OnInit {
  public scheme: any;
  public specialityname: any;
  public ipdform!: FormGroup;
  public getjson: any;
  public formnotvalid: any


  constructor(private formBuilder: FormBuilder,
    private ipdservice: IpdService
    , private toastr: ToastrService) {

  }

  ngOnInit(): void {

    this.ipdform = this.formBuilder.group({
      hospitalcode: ['', [Validators.required]],
      entrydate: ['', [Validators.required]],
      noofcasereported: ['', [Validators.required]],
      speciality: ['', [Validators.required]]
    });

    this.ipdservice.gethospitalcode().subscribe((results: any) => {
      this.scheme = results;
    })

    this.ipdservice.getspecialityname().subscribe((results: any) => {
      this.specialityname = results;
    })

  }



  public submit() {

    if (!this.ipdform.invalid) {

      this.formnotvalid = false;
      this.getjson = {
        "hospitalcode": this.ipdform.controls['hospitalcode'].value,
        "entrydate": this.ipdform.controls['entrydate'].value,
        "noofcasereported": this.ipdform.controls['noofcasereported'].value,
        "speciality": this.ipdform.controls['speciality'].value,
      }
      this.ipdservice.ipdentry(this.getjson).subscribe((results : any) => {
        if (results.message) {
          this.toastr.success(results.message)
        }
        else {
          this.toastr.error(results.message)
        }

      })
      this.ipdform.reset();
    }
    else {
      this.formnotvalid = true;
    }
  }

}

