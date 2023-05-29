import { Component, OnInit } from '@angular/core';
import {ChangepasswordService  } from './changepassword.service';

@Component({
  selector: 'app-changepassword',
  templateUrl: './changepassword.component.html',
  styleUrls: ['./changepassword.component.css']
})
export class ChangepasswordComponent implements OnInit{

  constructor() { }

    ngOnInit(): void {

      // password: ['', [Validators.required,Validators.pattern('((?=.*[0-9])(?=.*[@#])(?=.*[a-z])(?=.*[A-Z]).{8,30})')]],

    }
    

}
