import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-entrypage',
  templateUrl: './entrypage.component.html',
  styleUrls: ['./entrypage.component.css']
})
export class EntrypageComponent implements OnInit {
  entryForm !:FormGroup;

  City: any = ['Florida', 'South Dakota', 'Tennessee', 'Michigan'];
  // cityName: any;


  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,){}

   
    changeCity(e: any) {
      this.cityName?.setValue(e.target.value, {
        onlySelf: true,
      });
    }
    get cityName() {
      return this.entryForm.get('cityName');
    }

    ngOnInit(): void {
      this.entryForm = this.formBuilder.group({
        cityName: ['', [Validators.required]],
      });
    }
    public entrydata() {
      console.log(this.entryForm.controls['cityName'].value);
    }

}
