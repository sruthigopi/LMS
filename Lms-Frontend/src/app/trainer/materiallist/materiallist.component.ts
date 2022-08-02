import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaterialService } from 'src/app/material.service';
import { TrainerLearning } from './material.model';

@Component({
  selector: 'app-materiallist',
  templateUrl: './materiallist.component.html',
  styleUrls: ['./materiallist.component.css']
})
export class MateriallistComponent implements OnInit {

  materials: TrainerLearning[] = [];
  constructor(private materialService:MaterialService,public router:Router) { }

  onBackButtonClick():void{
    this.router.navigate(['student/course1/lrngmaterials1']);
  }

  ngOnInit(): void {

    this.materialService.getMaterials().
    subscribe((data)=>{
      this.materials=JSON.parse(JSON.stringify(data));
    })
  }

}


