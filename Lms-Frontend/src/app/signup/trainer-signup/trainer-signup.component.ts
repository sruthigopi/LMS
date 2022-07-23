import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-signup',
  templateUrl: './trainer-signup.component.html',
  styleUrls: ['./trainer-signup.component.css']
})
export class TrainerSignupComponent implements OnInit {

  constructor(private authService:AuthService,private router:Router) { }
  Trainer={
    name:'',
    address:'',
    email:'',
    ph:'',
    edu:'',
    pwd:'',
    repwd:'',
    skill:'',
    exp:'',
    isApproved:false
  }
  ngOnInit(): void {
  }
  trainerSignup(){
    this.authService.trainerSignup(this.Trainer);
    alert('Congratulations, Your Account Has Been Successfully Created.');
    this.router.navigate(['/tralogin']);
  }
}
