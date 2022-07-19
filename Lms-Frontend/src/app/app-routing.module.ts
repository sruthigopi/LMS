import { LearningMaterialsComponent } from './student/learning-materials/learning-materials.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { ExamComponent } from './student/exam/exam.component';
import { StudentComponent } from './student/student/student.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'student',component:StudentComponent},
{path:'student/stuexams',component:ExamComponent},
{path:'student/stufeedbacks',component:FeedbackComponent},
{path:'student/lrngmaterials',component:LearningMaterialsComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
