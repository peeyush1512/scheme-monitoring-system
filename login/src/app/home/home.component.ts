import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css','../../assets/css/style.css','../../assets/vendor/bootstrap-icons/bootstrap-icons.css',
  '../../assets/vendor/bootstrap/css/bootstrap.min.css','../../assets/vendor/quill/quill.bubble.css',
  '../../assets/vendor/quill/quill.snow.css','../../assets/vendor/remixicon/remixicon.css',
  '../../assets/vendor/simple-datatables/style.css','../../assets/vendor/boxicons/css/boxicons.min.css'

  ]
})
export class HomeComponent implements OnInit {
  
  active_schemes=1;
  not_report_districts=10;
  public total_user: any ;
  constructor(private router: Router , 
    private loginService:LoginService){

  }
  ngOnInit(): void {
    this.loginService.getuser().subscribe((results : any )=>{
      console.warn(results);
     this.total_user=results.total;
    })  

  }
  home_page(){
    this.router.navigate(['home']);
  }

}
