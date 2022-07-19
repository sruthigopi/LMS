import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ExamComponent } from './student/exam/exam.component';
import { FeedbackComponent } from './student/feedback/feedback.component';
import { LearningMaterialsComponent } from './student/learning-materials/learning-materials.component';
import { LoginComponent } from './student/login/login.component';
import { SignupComponent } from './student/signup/signup.component';
import { StudentComponent } from './student/student/student.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,

    ExamComponent,
    FeedbackComponent,
    LearningMaterialsComponent,
    LoginComponent,
    SignupComponent,
    StudentComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
