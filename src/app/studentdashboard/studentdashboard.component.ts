import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder,FormControl,FormGroup } from "@angular/forms";
import { ApiService } from '../shared/api.service';
import { StudentModel } from './student.model';
import { ToastrService } from "ngx-toastr";

@Component({
  selector: 'app-studentdashboard',
  templateUrl: './studentdashboard.component.html',
  styleUrls: ['./studentdashboard.component.css']
})
export class StudentdashboardComponent { 

  studentValue : FormGroup=new FormGroup({
    Name: new FormControl(),
    Class: new FormControl(),
    Email: new FormControl(),
    Password: new FormControl()
  }); ;
studentobj:StudentModel= new StudentModel;
studentlist:any =[]
buttononsave : boolean =true
buttonupdate : boolean = false



 constructor(private formbuilder:FormBuilder, private _api:ApiService, Toster:ToastrService){}

 ngonit(): void {

 }

 Addstudent(){
  
  this.studentobj.Name = this.studentValue.value.Name;
  this.studentobj.Class = this.studentValue.value.Class;
  this.studentobj.Email = this.studentValue.value.Email;
  this.studentobj.Password = this.studentValue.value.Password;  
  this._api.poststudent(this.studentobj).subscribe({next : (v) => {
  console.log(v);
},
error: (e) => {
  console.log(e)
 
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
 deletestudent(data:any){
  this._api.deletestudent(data.id).subscribe({next : (v) => {
    console.log(v);
  },
  error: (e) => {
    console.log(e)
   
  },
  complete:() => {
    console.log("Student Record Delete!")
    alert("Student Record Delete")
    this.getstudent();

  }
   
  }
    
  )
 }
 editstudent(data:any){

 this.studentValue.controls["Name"].setValue(data.Name);
 this.studentValue.controls["Class"].setValue(data.Class);
 this.studentValue.controls["Email"].setValue(data.Email);
 this.studentValue.controls["Password"].setValue(data.Password);
 this.studentobj.id = data.id;
 this.showsupdate();
 }
 Updatestudent(){
   
  this.studentobj.Name = this.studentValue.value.Name;
  this.studentobj.Class = this.studentValue.value.Class;
  this.studentobj.Email = this.studentValue.value.Email;
  this.studentobj.Password = this.studentValue.value.Password;  
  this._api.putstudent(this.studentobj, this.studentobj.id).subscribe({next : (v) => {
  console.log(v);
},
error: (e) => {
  console.log(e)
 
},
complete:() => {
  console.log("Student Record Updated!")
  alert("Student Record Updated")
  this.getstudent();
  this.studentValue.reset();
  this.showssave();
  this.studentobj.id = 0
}
 
})
}
showssave(){
  this.buttononsave = true;
  this.buttonupdate = false;
}
showsupdate(){
  this.buttononsave = false;
  this.buttonupdate = true;
}


}
