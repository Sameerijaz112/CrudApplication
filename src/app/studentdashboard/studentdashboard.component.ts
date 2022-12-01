import { Component } from '@angular/core';
import { FormBuilder,FormGroup } from "@angular/forms";

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent {


studentVal!:any



 constructor(private formbuilder:FormBuilder){}

 ngonit(): void {
  this.studentVal = this.formbuilder.group({
    Name:[],
    Class:[],
    Email:[],
    Password:[],
  })
 }
}
