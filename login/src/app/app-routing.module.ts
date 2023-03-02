import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
{
  path:'home/login',
  component:  LoginComponent,

} ,
{
  path:'home/registration',

  component:RegistrationComponent,
},
{
  path:'login',
  component:LoginComponent
},
{
  path:'registration',

  component:RegistrationComponent,
},
// {
//   path:'',
//   component:HomeComponent,
//   pathMatch:"full"
// } ,
{
  path:'home',
  component:HomeComponent,
  
} ,
{
  path:'main-home',
  component:MainHomeComponent,
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
