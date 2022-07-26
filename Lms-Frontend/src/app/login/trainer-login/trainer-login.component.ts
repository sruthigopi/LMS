import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainer-login',
  templateUrl: './trainer-login.component.html',
  styleUrls: ['./trainer-login.component.css']
})
export class TrainerLoginComponent implements OnInit {

  
  Trainer={
    traineremail:'',
    trainerpwd:''
  
  }
  constructor(private authService:AuthService,private router:Router) { }
  image:string='../../../assets/images/ba3.jpg';
  ngOnInit(): void {
  }
  trainerLogin(){
    this.authService.trainerLogin(this.Trainer)
    .subscribe(
      res=>{
    
        console.log('sucessfully loggedin');
        localStorage.setItem('token3',res.token3);
          // routed to chane to trainer 
        this.router.navigate(['trainer']);
       
     
    },
    (error:HttpErrorResponse)=>{
    alert('You are not an enrolled user');
    
    },
    )
      }

}
