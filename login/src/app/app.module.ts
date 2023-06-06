import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { FormsModule , ReactiveFormsModule, RequiredValidator  , Validator} from '@angular/forms';
import {  HttpClientModule } from '@angular/common/http';
import { MainHomeComponent } from './main-home/main-home.component';
import { EntrypageComponent } from './demos/entrypage/entrypage.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableComponent } from './table/table.component';
import { SchemeEntryComponent } from './scheme/scheme-entry/scheme-entry.component';
import { SchemeComponent } from './scheme/scheme/scheme.component';
import { IpdDetailsEntryComponent } from './ipd-details-entry/ipd-details-entry.component';
import { ImmunizationDetailsEntryComponent } from './immunization-details-entry/immunization-details-entry.component';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatNativeDateModule} from '@angular/material/core';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatDialogModule} from '@angular/material/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';
import { ReportMisComponent } from './report-mis/report-mis.component';
import { ProfileComponent } from './profile/profile.component';
import { HospitalLoginPageComponent } from './hospital-login-page/hospital-login-page.component';
import { DemotestComponent } from './demos/demotest/demotest.component';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { ChangepasswordComponent } from './changepassword/changepassword.component';
import { HospitalhomeComponent } from './hospital/hospitalhome/hospitalhome.component';
import { ForgetComponent } from './forget/forget.component';


@NgModule({ 
  declarations:[
    AppComponent ,
    LoginComponent,
    HomeComponent,
    HomepageComponent,
    MainHomeComponent,
    EntrypageComponent,
    RegistrationComponent,
    TableComponent,
    SchemeEntryComponent,
    SchemeComponent,
    IpdDetailsEntryComponent,
    ImmunizationDetailsEntryComponent,
    HospitalLoginComponent,
    ReportMisComponent,
    ProfileComponent,
    HospitalLoginPageComponent,
    DemotestComponent,
    ChangepasswordComponent,
    HospitalhomeComponent,
    ForgetComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MdbDropdownModule,
    MatMenuModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule
  ],
  exports :[
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
