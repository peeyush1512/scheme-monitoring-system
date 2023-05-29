import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrypageComponent } from './demos/entrypage/entrypage.component';
import { HomeComponent } from './home/home.component';
import { HospitalLoginPageComponent } from './hospital-login-page/hospital-login-page.component';
import { HospitalLoginComponent } from './hospital-login/hospital-login.component';
import { ImmunizationDetailsEntryComponent } from './immunization-details-entry/immunization-details-entry.component';
import { IpdDetailsEntryComponent } from './ipd-details-entry/ipd-details-entry.component';
import { LoginComponent } from './login/login.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReportMisComponent } from './report-mis/report-mis.component';
import { SchemeComponent } from './scheme/scheme/scheme.component';
import { SchemeEntryComponent } from './scheme/scheme-entry/scheme-entry.component';
import { TableComponent } from './table/table.component';
import { DemotestComponent } from './demos/demotest/demotest.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';


const routes: Routes = [
  {
    path:'scheme',
    component:  SchemeComponent,
  
  } ,
  {
    path:'table',
    component:  TableComponent,
  
  } ,
{
  path:'schemeentry',

  component:SchemeEntryComponent,
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'registration',

  component:RegistrationComponent,
},
{
  path:'reportmis',

  component:ReportMisComponent,
},
{
  path:'hospitallogin',

  component:HospitalLoginComponent,
},
// {
//   path:'',
//   component:HomeComponent,
//   pathMatch:"full"
// } ,
{
  path:'home',
  component:HomeComponent,
  children:[
    {
      path:'immunizationentry',
      component:ImmunizationDetailsEntryComponent,
      
    } ,
  ]
},
{
  path:'mainhome',
  component:MainHomeComponent,
  
} ,

{
  path:'loginhospital',
  component:HospitalLoginPageComponent,
  
} ,
{
  path:'profile',
  component:ProfileComponent,
  
} ,
{
  path:'ipdentry',
  component:IpdDetailsEntryComponent,
  
} ,
{
  path:'demohome',
  component:HomepageComponent
  
} ,
{
  path:'demotest',
  component:DemotestComponent,
  
} ,
{
  path:'immunizationentry',
  component:ImmunizationDetailsEntryComponent,
  
} ,

{
  path:'',
  component:LoginComponent,
  pathMatch:'full',
},
{
  path:'entrypage',
  component:EntrypageComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
