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

studentVal!:any
studentobj:StudentModel= new StudentModel;
studentlist:any =[]



 constructor(private formbuilder:FormBuilder, private api:ApiService){}

 ngonit(): void {
  this.studentVal = this.formbuilder.group({
    Name:[],
    Class:[],
    Email:[],
    Password:[],
  })
 }

 Addstudent(){
  this.studentobj.Name = this.studentVal.value.Name;
  this.studentobj.Class = this.studentVal.value.Class;
  this.studentobj.Email = this.studentVal.value.Email;
  this.studentobj.Password = this.studentVal.value.Password;


this.api.poststudent(this.studentobj).subscribe({next : (v) => {
  console.log(v)
},
error: (e) => {
  console.log(e)
  alert("error")
},
complete:() => {
  console.log("Student Record Added")
  alert("Student Record Added")
  this.getstudent();
}
 
})

 }
 getstudent(){
  this.api.getstudent().subscribe(res => {
    this.studentlist = res;
  })
 }
}
