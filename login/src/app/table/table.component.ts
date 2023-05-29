import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent  implements OnInit{

  temp:any;  
  constructor(
    private loginService:LoginService){

  }
  ngOnInit(): void {
    this.loginService.getuserdata().subscribe((results : any )=>{
      console.warn(results);
      this.temp=results;
    })  

  }
}
