import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule , ReactiveFormsModule, RequiredValidator } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MainHomeComponent } from './main-home/main-home.component';
import { EntrypageComponent } from './entrypage/entrypage.component';
import { RegistrationComponent } from './registration/registration.component';
@NgModule({
  declarations:[
    AppComponent ,
    LoginComponent,
    HomeComponent,
    MainHomeComponent,
    EntrypageComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  exports :[
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
