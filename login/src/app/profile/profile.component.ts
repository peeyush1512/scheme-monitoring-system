import { Component, OnInit ,Inject } from '@angular/core';
import { ProfileService } from "./profile.service";
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  profiledata :any;

 
  
  
  constructor(private profile:ProfileService,public dialog: MatDialog,
    private dialogRef: MatDialogRef<ProfileComponent>,
    @Inject(MAT_DIALOG_DATA) data: { message: string }
  ) {

  } 
  
  ngOnInit(): void {


    this.profile.getuserdata(localStorage.getItem('user')).subscribe((results:any)=>{
      if(results[0].name){        
        this.profiledata=results[0];
        
      }
      else{
        console.log(results);
        
      }
    })


  }

public closedialog(){
  this.dialogRef.close();
}




}
