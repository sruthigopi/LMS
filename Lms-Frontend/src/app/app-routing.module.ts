import { LearningMaterialsComponent } from './student/learning-materials/learning-materials.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { ExamComponent } from './student/exam/exam.component';
import { StudentComponent } from './student/student/student.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { TrainerLoginComponent } from './login/trainer-login/trainer-login.component';
import { StudentSignupComponent } from './signup/student-signup/student-signup.component';
import { TrainerSignupComponent } from './signup/trainer-signup/trainer-signup.component';
import { AdmNavComponent } from './admin/adm-nav/adm-nav.component';
import { AdmStuAccessComponent } from './admin/adm-stu-access/adm-stu-access.component';
import { AdmTraAccessComponent } from './admin/adm-tra-access/adm-tra-access.component';
import { AdmTarainerComponent } from './admin/adm-tarainer/adm-tarainer.component';
import { AdmStudentComponent } from './admin/adm-student/adm-student.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'student',component:StudentComponent},
{path:'stuexams',component:ExamComponent},
{path:'stufeedbacks',component:FeedbackComponent},
{path:'lrngmaterials',component:LearningMaterialsComponent},
{path:'adlogin',component:AdminLoginComponent},
{path:'stulogin',component:StudentLoginComponent},
{path:'tralogin',component:TrainerLoginComponent},
{path:'stureg',component:StudentSignupComponent},
{path:'trareg',component:TrainerSignupComponent},
{path:'admin',component:AdmNavComponent},
{path:'stuaccess',component:AdmStuAccessComponent},
{path:'traaccess',component:AdmTraAccessComponent},
{path:'trahome',component:AdmTarainerComponent},
{path:'stuhome',component:AdmStudentComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
