import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.css']
})
export class StudentLoginComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  Student={
    studentemail:'',
    studentpwd:''
  
  }
  studentLogin(){
this.authService.studentLogin(this.Student)
.subscribe(
  res=>{

    console.log('sucessfully loggedin');
    localStorage.setItem('token',res.token);
    this.router.navigate(['student/stuexams']);
 
},
(error:HttpErrorResponse)=>{
alert('Admin must entrol your profile for logging');

},
)
  }

}
