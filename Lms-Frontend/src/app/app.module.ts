import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule,HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './auth.service';
import { TokenInterceptorService } from './token-interceptor.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExamComponent } from './student/exam/exam.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { LearningMaterialsComponent } from './student/learning-materials/learning-materials.component';
import { LoginComponent } from './student/login/login.component';
import { SignupComponent } from './student/signup/signup.component';
import { StudentComponent } from './student/student/student.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './login/admin-login/admin-login.component';
import { StudentLoginComponent } from './login/student-login/student-login.component';
import { TrainerLoginComponent } from './login/trainer-login/trainer-login.component';
import { StudentSignupComponent } from './signup/student-signup/student-signup.component';
import { TrainerSignupComponent } from './signup/trainer-signup/trainer-signup.component';
import { AdmNavComponent } from './admin/adm-nav/adm-nav.component';
import { AdmStuAccessComponent } from './admin/adm-stu-access/adm-stu-access.component';
import { AdmTraAccessComponent } from './admin/adm-tra-access/adm-tra-access.component';
import { AdmStudentComponent } from './admin/adm-student/adm-student.component';
import { AdmTarainerComponent } from './admin/adm-tarainer/adm-tarainer.component';
import { CoursesComponent } from './courses/courses.component';
import { Exam1Component } from './student/exam/exam1/exam1.component';
import { Feedback1Component } from './student/feedback/feedback1/feedback1.component';
import { Exam2Component } from './student/exam/exam2/exam2.component';
import { Feedback2Component } from './student/feedback/feedback2/feedback2.component';

@NgModule({
  declarations: [
    AppComponent,

    ExamComponent,
    FeedbackComponent,
    LearningMaterialsComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    HomeComponent,
    AdminLoginComponent,
    StudentLoginComponent,
    TrainerLoginComponent,
    StudentSignupComponent,
    TrainerSignupComponent,
    AdmNavComponent,
    AdmStuAccessComponent,
    AdmTraAccessComponent,
    AdmStudentComponent,
    AdmTarainerComponent,
    CoursesComponent,
    Exam1Component,
    Feedback1Component,
    Exam2Component,
    Feedback2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi:true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
