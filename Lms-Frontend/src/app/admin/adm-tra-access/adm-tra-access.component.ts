import { Component, OnInit } from '@angular/core';
import { AccessService } from 'src/app/access.service';
import { TrainerModel } from './traineraccess.model';

@Component({
  selector: 'app-adm-tra-access',
  templateUrl: './adm-tra-access.component.html',
  styleUrls: ['./adm-tra-access.component.css']
})
export class AdmTraAccessComponent implements OnInit {

  
  title:string='Enroll Trainers';
  trainers:TrainerModel |any;
  nodata=false;

  constructor(private accessService:AccessService) { }

  ngOnInit(): void {
    console.log('deatails');
    this.accessService.getTrainerdetails().subscribe((data)=>{
      this.trainers=JSON.parse(JSON.stringify(data));
      // find any trainer is present to approve
     
      if (this.trainers.length === 0) {
        this.nodata=true;
     } else {
      this.nodata=false
    }
    console.log(this.trainers.length)
    })
  }
// approve trainers
approveTrainer(trainer:any){
  this.accessService.approveTrainer(trainer).subscribe((data)=>{
    this.ngOnInit();
 })
}
// decline trainer
declineTrainer(trainer:any){
  this.accessService.declineTrainer(trainer._id)
  .subscribe((data)=>{
      this.ngOnInit();
   });
    }

}
