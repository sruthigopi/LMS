import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trainerhome',
  templateUrl: './trainerhome.component.html',
  styleUrls: ['./trainerhome.component.css']
})
export class TrainerhomeComponent implements OnInit {

  constructor(private router:Router,) { }

  ngOnInit(): void {
  }
  logoutTrainer(){
    localStorage.removeItem('token3');
    this.router.navigate(['tralogin']);
  }
  }

