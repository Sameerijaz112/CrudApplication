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
this.api.poststudent(this.studentobj).subscribe({next : (v) => {
  console.log(v)
} })

 }
}
