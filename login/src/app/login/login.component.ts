import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute ,Navigation } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { first } from 'rxjs/operators';
// import { AuthenticationService } from '../_services';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css','../../assets/css/style.css',
  '../../assets/vendor/bootstrap-icons/bootstrap-icons.css', '../../assets/vendor/bootstrap/css/bootstrap.min.css',
  '../../assets/vendor/quill/quill.bubble.css','../../assets/vendor/quill/quill.snow.css',
  '../../assets/vendor/remixicon/remixicon.css','../../assets/vendor/simple-datatables/style.css',
  '../../assets/vendor/boxicons/css/boxicons.min.css'


]
})
export class LoginComponent implements OnInit {
    loginForm !: FormGroup;
    public getjson:any;
    // public returnuser : any ;
    
    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private loginService:LoginService
        ,private toastr :ToastrService
        // private authenticationService: AuthenticationService
    ){ 
        
    }
    

    ngOnInit() {
      if(localStorage.getItem('user')){
        this.router.navigate(['home']);
      }
        this.loginForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            password: ['', [Validators.required]]
        });
        
    }

    // convenience getter for easy access to form fields
    // get f() { return this.loginForm.controls; }

    //login user
    public loginuser() {
        this.getjson={
            "name":this.loginForm.controls['name'].value,
            "password":this.loginForm.controls['password'].value
            
        }
        this.loginService.loginuser(this.getjson).subscribe((results : any )=>{
          
                   
          if(results.message){
                  this.toastr.info(results.message);
                  this.router.navigate(['login']);
            }
            else{              
              if(results[0].name){
                this.toastr.success(results[0].name,"Welcome");
                localStorage.setItem('user',results[0].id)
                localStorage.setItem('role',results[0].role)
                if(results[0].role==1 || results[0].role==2){
                  this.router.navigate(['home']);
                }
                else 
                if(results[0].role==3){
                  this.router.navigate(['loginhospital']);
                }
                else{
                  this.router.navigate(['demotest']);
                } 
              }
              else{
                 this.toastr.error(results);
                 this.router.navigate(['login']);
              }            
            }      
        })  
    }
    public registration_page() {
      this.router.navigate(['registration']);
    }
    public home_page() {
      this.router.navigate(['home']);
      
    }
}







     //   this.registrationForm = this.formBuilder.group({
      //       username: ['', [Validators.required]],
      //       password: ['', [Validators.required]],
      //       email: ['', [Validators.required]],
            
      //   });
      //   this.updateuserForm = this.formBuilder.group({
      //     username: ['', [Validators.required]],
      //     password: ['', [Validators.required]],
      //     email: ['', [Validators.required]],
          
      // });
// //   
//     //update user profile
//     public userupdate() {
//       this.getjson={
//         "username":this.updateuserForm.controls['username'].value,
//         "password":this.updateuserForm.controls['password'].value,
//         "email":this.updateuserForm.controls['email'].value
//     }
//     }
// //registration user 
// public   registrationuser() {
//   this.submitted = true;
  
//   this.getjson={
//       "username":this.registrationForm.controls['username'].value,
//       "password":this.registrationForm.controls['password'].value,
//       "email":this.registrationForm.controls['email'].value
//   }
//   this.loginService.registrationuser(this.getjson).subscribe((results)=>{
//           console.warn(results);
//           this.getjson=results;
//           this.router.navigate(['main-home']);
//         })
// }
// public gosignup(){
// this.flag=false;
// }


// public gologin(){
// this.flag=true
// }
/**
* registration_page
*/
// import { Component, OnInit } from '@angular/core';
// import { Router, ActivatedRoute } from '@angular/router';
// import { FormBuilder, FormGroup,FormControl, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
// import { logindata, regi } from '../data-type';
// import { LoginService } from '../services/login.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {

//   public testform : any;
//   constructor(public loginusers: LoginService, public fb : FormBuilder) {
    
//   }
//   ngOnInit(): void {
//       this.testform = this.fb.control({

//         name : ['', Validators.required],
//         password: ['',Validators.required]
//     })

//   }
//   public submitted( ){
    
//     console.log(this.testform.name,'hello');
//   }
//   public test(){
//     console.log(this.testform.name,'hello');
//   }
//   onSubmit(){

//   }

// }   
    // //   this.form = new FormGroup({
    // //     name: new FormControl(),
    // //     password: new FormControl()
    // // });
  
    // public test(){
    //   console.log('TEST:----  ',this.testform.name,'hello');
    // }
    // public loginuserid( ) {
    //   console.log('inside',this.testform);
      
    //  console.log(this.testform.value);
     
    //   // this.loginusers.loginuser(data).subscribe((results)=>{
    //   //   console.warn(results);
    //   //   this.getjsonvalue=results;
        
    //   // })
  
    // }
  
  
    // flag=true;
  
    // public registrationdata(data : any){
    //   this.loginusers.registrationuser(data).subscribe((results)=>{
    //     console.warn(results);
    //   })
      
    // }
  
      // // signup(){
  
    // // }
  
  
    // // public login(){
  
    // // }

      // 
        // // stop here if form is invalid
        // if (this.loginForm.invalid) {
        //     return;
        // }

        // this.loading = true;
        // this.authenticationService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.error = error;
        //             this.loading = false;
        //         });