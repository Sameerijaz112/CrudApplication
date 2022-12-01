import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";
import { ApiService } from '../shared/api.service';
import { StudentModel } from './student.model';

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent { 

studentValue:FormGroup|any
studentobj:StudentModel= new StudentModel;
studentlist:any =[]



 constructor(private formbuilder:FormBuilder, private _api:ApiService,  ){}

 ngonit(): void {
  this.studentValue = this.formbuilder.group({
      Name:[''],
    Class:[''],
    Email:[''],
    Password:[''],
  });
  this.getstudent();
  
 }

 Addstudent(){
  
  this.studentobj.Name = this.studentValue.value.Name;
  this.studentobj.Class = this.studentValue.value.Class;
  this.studentobj.Email = this.studentValue.value.Email;
  this.studentobj.Password = this.studentValue.value.Password;  
  this._api.poststudent(this.studentobj).subscribe({next : (v) => {
  console.log(v)
},
error: (e) => {
  console.log(e)
  alert("error")
},
complete:() => {
  console.log("Student Record Added!")
  alert("Student Record Added")
  this.getstudent();
  this.studentValue.reset();
}
 
})

 }
 getstudent(){
  this._api.getstudent().subscribe(res => {
    this.studentlist = res;
  })
 }
}
