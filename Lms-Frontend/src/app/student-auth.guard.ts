import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TestService } from './test.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private testService:TestService,private router:Router){}
  canActivate():boolean{
// to protect the admin routing
// protet admin is logged in
    if(this.testService.loggedInStudent()){ 
      return true;
 }
 else{
     this.router.navigate(['stulogin']);
     return false;
 }
  }
  
}
