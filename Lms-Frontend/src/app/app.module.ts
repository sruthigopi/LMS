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
import { UpdateStuComponent } from './admin/update-stu/update-stu.component';
import { UpdateTraComponent } from './admin/update-tra/update-tra.component';
import { AdminTraNavComponent } from './admin/admin-tra-nav/admin-tra-nav.component';
import { AdminTraFsdComponent } from './admin/admin-tra-fsd/admin-tra-fsd.component';
import { AdminTraCsaComponent } from './admin/admin-tra-csa/admin-tra-csa.component';
import { AdminStuNavComponent } from './admin/admin-stu-nav/admin-stu-nav.component';
import { AdminStuFsd02Component } from './admin/admin-stu-fsd02/admin-stu-fsd02.component';
import { AdminStuDsa01Component } from './admin/admin-stu-dsa01/admin-stu-dsa01.component';
import { AdminStuDsa02Component } from './admin/admin-stu-dsa02/admin-stu-dsa02.component';
import { AdminStuCsa1Component } from './admin/admin-stu-csa1/admin-stu-csa1.component';
import { AdminStuCsa2Component } from './admin/admin-stu-csa2/admin-stu-csa2.component';

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
    UpdateStuComponent,
    UpdateTraComponent,
    AdminTraNavComponent,
    AdminTraFsdComponent,
    AdminTraCsaComponent,
    AdminStuNavComponent,
    AdminStuFsd02Component,
    AdminStuDsa01Component,
    AdminStuDsa02Component,
    AdminStuCsa1Component,
    AdminStuCsa2Component
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
