import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/access.service';
import { TrainerModel } from '../adm-tra-access/traineraccess.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-tarainer',
  templateUrl: './adm-tarainer.component.html',
  styleUrls: ['./adm-tarainer.component.css']
})
export class AdmTarainerComponent implements OnInit {

  trainers:TrainerModel |any;
  nodata=false;

  constructor(private accessService :AccessService ,private router:Router) { }

  ngOnInit(): void {
    this.accessService.aprovedTrainer().subscribe((data)=>{
      this.trainers=JSON.parse(JSON.stringify(data));
     
      if (this.trainers.length === 0) {
        this.nodata=true;
     } else {
      this.nodata=false
    } 
  })
  }
  deleteTrainer(trainer:any){
    this.accessService.deleteTrainer(trainer._id)
    .subscribe((data)=>{
      this.trainers =this.trainers.filter((p: any)=>p!== trainer);
      this.ngOnInit();
     });
  }
}
