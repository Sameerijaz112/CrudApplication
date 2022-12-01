import { NgModule } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentdashboardComponent } from './studentdashboard/studentdashboard.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentdashboardComponent,
    

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule

    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
