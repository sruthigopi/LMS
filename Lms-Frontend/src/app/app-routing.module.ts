import { Feedback2Component } from './student/feedback/feedback2/feedback2.component';
import { Exam2Component } from './student/exam/exam2/exam2.component';
import { Feedback1Component } from './student/feedback/feedback1/feedback1.component';
import { Exam1Component } from './student/exam/exam1/exam1.component';
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
import { AuthGuard } from './auth.guard';
import { UpdateStuComponent } from './admin/update-stu/update-stu.component';
import { UpdateTraComponent } from './admin/update-tra/update-tra.component';
import { CoursesComponent } from './courses/courses.component';
import { AdminTraFsdComponent } from './admin/admin-tra-fsd/admin-tra-fsd.component';
import { AdminTraCsaComponent } from './admin/admin-tra-csa/admin-tra-csa.component';
import { AdminStuFsd02Component } from './admin/admin-stu-fsd02/admin-stu-fsd02.component';
import { AdminStuDsa01Component } from './admin/admin-stu-dsa01/admin-stu-dsa01.component';
import { AdminStuDsa02Component } from './admin/admin-stu-dsa02/admin-stu-dsa02.component';
import { AdminStuCsa1Component } from './admin/admin-stu-csa1/admin-stu-csa1.component';
import { AdminStuCsa2Component } from './admin/admin-stu-csa2/admin-stu-csa2.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'adlogin',component:AdminLoginComponent},
{path:'stulogin',component:StudentLoginComponent},
{path:'tralogin',component:TrainerLoginComponent},
{path:'stureg',component:StudentSignupComponent},
{path:'trareg',component:TrainerSignupComponent},
{path:'admin',component:AdmNavComponent},
{path:'stuaccess',canActivate:[AuthGuard],component:AdmStuAccessComponent},
{path:'traaccess',canActivate:[AuthGuard],component:AdmTraAccessComponent},
{path:'trahome',canActivate:[AuthGuard],component:AdmTarainerComponent},
{path:'stuhome',canActivate:[AuthGuard],component:AdmStudentComponent},
{path:'stuudt',component:UpdateStuComponent},
{path:'traudt',component:UpdateTraComponent},
{path:'student/stuexams',component:ExamComponent},
{path:'student/stuexams/exam1',component:Exam1Component},
{path:'student/stuexams/exam2',component:Exam2Component},
{path:'student/stufeedbacks',component:FeedbackComponent},
{path:'student/stufeedbacks/feedback-1',component:Feedback1Component},
{path:'student/stufeedbacks/feedback-2',component:Feedback2Component},
{path:'student',component:StudentComponent},
{path:'student/lrngmaterials',component:LearningMaterialsComponent},
{path:'courses',component:CoursesComponent},
{path:'admfsd',component:AdminTraFsdComponent},
{path:'admcsa',component:AdminTraCsaComponent},
{path:'adstfsd2',component:AdminStuFsd02Component},
{path:'adstdsa1',component:AdminStuDsa01Component},
{path:'adstdsa2',component:AdminStuDsa02Component},
{path:'adstcsa1',component:AdminStuCsa1Component},
{path:'adstcsa2',component:AdminStuCsa2Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
