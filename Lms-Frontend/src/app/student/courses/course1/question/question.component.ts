import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { QuestionService } from 'src/app/service/question.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  public questionList:any=[];
  public currentQuestion:number=0;
  public points:number=0;
  counter=60;
  correctAnswer:number=0;
  incorrectAnswer:number=0;
  interval$:any;
  isQuizCompleted:boolean=false;

  constructor( private questionService:QuestionService) { }

  ngOnInit(): void {
    this.getAllQuestions();
    this.startCounter();
  }
  getAllQuestions(){
    this.questionService.getQuestionJson()
    .subscribe(res=>{
      // console.log(res.questions);
      this.questionList=res.questions;
      
    })
  }

  nextQuestion(){
    this.currentQuestion++;
  }

  previousQuestion(){
    this.currentQuestion--;
  }
  answer(currentQno:number,option:any)
{
  if(currentQno===this.questionList.length){
    this.isQuizCompleted=true;
    this.stopCounter();
  }
  if(option.correct){
    this.points+=1;
    this.correctAnswer++;
    this.currentQuestion++;
  }
  else{
    this.currentQuestion++;
    this.incorrectAnswer++;
  }
}
startCounter(){
this.interval$=interval(1000).subscribe(val=>{
  this.counter--;
  if(this.counter===0){
    this.currentQuestion++;
    this.counter=60;
    
  }
});
setTimeout(() => {
  this.interval$.unsubscribe();
}, 600000);
}
stopCounter()
{
this.interval$.unsubscribe();
this.counter=0;
}
resetCounter(){
  this.stopCounter();
  this.counter=60;
  this.startCounter();
}

resetQuiz()
{

  this.resetCounter();
  this.getAllQuestions();
  this.points=0;
  this.counter=60;
  this.currentQuestion=0;
}}
