import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute ,Navigation } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css','../../assets/css/style.css',
  '../../assets/vendor/bootstrap-icons/bootstrap-icons.css', '../../assets/vendor/bootstrap/css/bootstrap.min.css',
  '../../assets/vendor/quill/quill.bubble.css','../../assets/vendor/quill/quill.snow.css',
  '../../assets/vendor/remixicon/remixicon.css','../../assets/vendor/simple-datatables/style.css',
  '../../assets/vendor/boxicons/css/boxicons.min.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm !: FormGroup;
  public getjson:any;
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private loginService:LoginService
      // private authenticationService: AuthenticationService
  ){ 
      
  }  
  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required]],
      age: ['', [Validators.required]],
      mobile: ['', [Validators.required]],
      
    });
  }
  public   registrationuser() {
    this.getjson={
        "name":this.registrationForm.controls['name'].value,
        "password":this.registrationForm.controls['password'].value,
        "email":this.registrationForm.controls['email'].value,
        "age":this.registrationForm.controls['age'].value,
        "mobile":this.registrationForm.controls['mobile'].value
    }
    this.loginService.registrationuser(this.getjson).subscribe((results)=>{
            console.warn(results);
            this.getjson=results;
            this.router.navigate(['login']);
          })
}

public login_page() {
  this.router.navigate(['login']);
}

public home_page() {
  this.router.navigate(['home']);
  
}
}

