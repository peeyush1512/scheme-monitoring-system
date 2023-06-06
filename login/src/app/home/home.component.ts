import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { SchemeService } from '../scheme/scheme.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ProfileComponent } from '../profile/profile.component'
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { SchemeserviceService } from './scheme/schemeservice.service'
import { _getTargetValue } from '../../assets/vendor/chart.js/plugins/plugin.filler/filler.options';
import { _getTarget } from '../../assets/vendor/chart.js/plugins/plugin.filler/filler.target';
import { Chart } from 'chart.js/auto';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../../assets/css/style.css', '../../assets/vendor/bootstrap-icons/bootstrap-icons.css',
    '../../assets/vendor/bootstrap/css/bootstrap.min.css', '../../assets/vendor/quill/quill.bubble.css',
    '../../assets/vendor/quill/quill.snow.css', '../../assets/vendor/remixicon/remixicon.css',
    '../../assets/vendor/simple-datatables/style.css', '../../assets/vendor/boxicons/css/boxicons.min.css'
  ]
})
export class HomeComponent {

  schemes: any;
  active_schemes: any;
  not_report_districts: any;
  public total_user: any;
  


  constructor(private router: Router, private toastr: ToastrService,
    private loginService: LoginService, private schemeService: SchemeService,
    public dialog: MatDialog, private service: SchemeserviceService,
    private formbuilder: FormBuilder) {


  }
  public chart1: any;
  public chart2: any;
  public dkbssychart1: any;
  public chart3: any;
  schemeselect!: Number;
  temp1: any;
  temp2: any;
  temp3: any;
  temp4: any;
  temp5: any;
  temp6: any;
  distname: any;
  schemeform!: FormGroup;
  dkbssyform!: FormGroup;
  jsondata: any
  ngOnInit(): void {
    if (!localStorage.getItem('user')) {
      this.router.navigate(['login']);
    }else {
      this.loginService.rolevalidet(localStorage.getItem('user'))
        .subscribe((result:any)=>{
          if(!result.message){
            this.router.navigate([result.navigate])
          }
          else{
            this.router.navigate([result.navigate])
          }
        })  
      }

    //FORM CREATING 
    this.schemeform = this.formbuilder.group({
      schemeselected: ['', []]

    });
    this.dkbssyform = this.formbuilder.group({
      districtselected: ['', [Validators.required]],
      year: ['', [Validators.pattern('[0-9]{4}')]]

    });



    //FUNCTION CALLS
    this.schemevalues();
    this.schemeselect = 0;
    // this.Chart1(this.data1);
    // this.Chart2(this.data2);
    // this.Chart3(this.data1,this.data2);




    //APIs CALL
    this.loginService.getuser().subscribe((results: any) => {
      this.total_user = results;
    })
    this.schemeService.gettotal().subscribe((results: any) => {
      this.active_schemes = results;
    })
    this.jsondata = {
      "year": 2021
    }
    // this.service.getayushmaan(2021).subscribe((results2:any )=>{
    //   this.temp2=results2;
    // })

    this.service.getdmeincentive().subscribe((results3: any) => {
      this.temp4 = results3;
    })
    this.service.getdhsincentive().subscribe((results3: any) => {
      this.temp5 = results3;
    })
    this.service.getcovidincentive().subscribe((results3: any) => {
      this.temp6 = results3;
    })
    this.service.getsotto().subscribe((results3: any) => {
      this.temp3 = results3;
    })

    this.service.getdistname().subscribe((results: any) => {
        this.distname = results;
    })



  }







  //FUNCTIONS DEFINATIONS

  private schemevalues() {
    this.schemeService.getschemes().subscribe((results: any) => {
      this.schemes = results;
    })
  }

  public schemechange() {

    this.schemeselect = this.schemeform.controls['schemeselected'].value;
  }
  public showscheme() {

  }
  home_page() {
    this.router.navigate(['home']);
  }



  public dkbssysubmit() {
    if (!this.dkbssyform.invalid) {
      let jsondata;
      if (!(this.dkbssyform.controls['year'].value == "")) {
        jsondata = {
          "distname": this.dkbssyform.controls['districtselected'].value,
          "year": this.dkbssyform.controls['year'].value
        }
      }
      else {
        jsondata = {
          "distname": this.dkbssyform.controls['districtselected'].value
        }
      }

      this.service.getdkbssy(jsondata).subscribe((results1: any) => {
        this.temp1 = results1;
        if (results1.message) {
          this.toastr.info(results1.message);
        }
        else{
          this.dkbssychart(this.temp1)
          
        }
      })
    }
    else {
      console.log("not valid");

    }
  }



  public dkbssydist() {

  }



  public profile() {
    this.toastr.info("Profile")
    const ref: MatDialogRef<ProfileComponent> = this.dialog.open(
      ProfileComponent,
      {
        width: '400px',
        height: '800px',
        data: {
          message: 'profile open',
        },
        backdropClass: 'confirmDialogComponent',
        hasBackdrop: true
      }
    );
  }

  public editprofile() {
    this.toastr.info("Profile Edit")
  }

  public changepassword() {
    this.toastr.info("Change Password")
  }

  public logout() {
    localStorage.removeItem('user');
    this.toastr.info("Log Out");
    this.router.navigate(['']);
  }



  dkbssychart(data:any) {
    // this.list1=[data[0].yr,data[1].yr,data[2].yr,data[3].yr,data[4].yr,data[5].yr,];
    // if(this.dkbssychart1.destroy()){
    //   this.dkbssychart1.destroy();
    // }
    if(this.dkbssychart1 != undefined){
      this.dkbssychart1.destroy();
    }
    this.dkbssychart1 = new Chart("dkbssychart", {
      type: 'doughnut',  
      
      data: {
        labels:[data[0].yr,data[1].yr,data[2].yr,data[3].yr,data[4].yr,data[5].yr,],
        datasets: [
          {
            // label:[String(data[0].yr),String(data[1].yr),String(data[2].yr),String(data[3].yr),String(data[4].yr),String(data[5].yr)],
            data: [data[0].beneficiaries,data[1].beneficiaries,data[2].beneficiaries,data[3].beneficiaries,data[4].beneficiaries,data[5].beneficiaries,],
            backgroundColor: ["#32a5af","#3a991f","#cc9f66","#b3ffe6","#b3fe66","#f0ccb0"]
          }
        ]
      },
      options: {
        responsive:false,
        plugins: {
          legend:{
            display:true,
            position: "bottom"
          },
          title: {
            display:true,
            text: "DKBSSY CLAIMS of "+data[0].district_name,
            font:{
              size:20,
              family:"Times New Roman",
              weight:"bold"
            },
            color:"red",
          }
        }
      }
    });
  }





  //charts`
  // Chart1(data:any) {
  //   this.chart1 = new Chart("claim1", {
  //     type: 'doughnut', //this denotes tha type of chart
  //     data: {// values on X-Axis
  //       labels: ["Government hospital", "private hospital"],
  //       datasets: [
  //         {
  //           data: data,
  //           backgroundColor: ['blue', 'green']
  //         }
  //       ]
  //     },
  //     options: {
  //       responsive:false,
  //       plugins: {
  //         title: {
  //           display:true,
  //           text: "Claim cases",
  //           font:{
  //             size:20,
  //             family:"Times New Roman",
  //             weight:"bold" 
  //           },
  //           color:"red",
  //         }
  //       }
  //     }
  //   });
  // }

  // Chart2(data:any) {
  //   this.chart2 = new Chart("claim2", {
  //     type: 'doughnut', //this denotes tha type of chart
  //     data: {// values on X-Axis
  //       labels: ["Government hospital", "private hospital"],
  //       datasets: [
  //         {
  //           data: data,
  //           backgroundColor: ['orange', '']
  //         }
  //       ]
  //     },
  //     options: {
  //       responsive:false,
  //       plugins: {
  //         title: {
  //           display:true,
  //           text: "Claim Amount",
  //           font:{
  //             size:20,
  //             family:"Times New Roman",
  //             weight:"bold"
  //           },
  //           color:"red",
  //         }
  //       }
  //     }
  //   });
  // }


  // Chart3(data1:any,data2:any) {
  //   this.chart3 = new Chart("total", {
  //     type: 'doughnut', //this denotes tha type of chart
  //     data: {// values on X-Axis
  //       labels: ["Total Cases", "Total Amount"],
  //       datasets: [
  //         {
  //           data: [data1[0]+data1[1],data2[0]+data2[1]],
  //           backgroundColor: ['pink', 'yellow']
  //         }
  //       ]
  //     },
  //     options: {
  //       responsive:false,
  //       plugins: {
  //         title: {
  //           display:true,
  //           text: "Total Cases and Amount",
  //           font:{
  //             size:20,
  //             family:"Times New Roman",
  //             weight:"bold"
  //           },
  //           color:"red",
  //         }
  //       }
  //     }
  //   });
  // }







}
