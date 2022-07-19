import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.css']
})
export class StudentSignupComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }
  Student={
    name:'',
    address:'',
    email:'',
    ph:'',
    edu:'',
    pwd:'',
    repwd:'',
    isApproved:false
  }
  studentSignup(){
  this.authService.studentSignup(this.Student);
  alert('Congratulations, Your Account Has Been Successfully Created.');
  this.router.navigate(['/stulogin']);
  }
}
