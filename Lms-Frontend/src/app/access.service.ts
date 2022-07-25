import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  constructor(private http:HttpClient) { }

  // get student details to admin for access allocation
getstudetails(){
  return this.http.get('http://localhost:3000/studentdetails');
}
// get trainer details to admin for access allocation
getTrainerdetails(){
  console.log('get trainer details service file ok')
  return this.http.get('http://localhost:3000/trainerdetails');
}

// approve student
approveStudent(student:any){
  return this.http.put('http://localhost:3000/approve',student);
}

// approved student list
aprovedStuList(){
  return this.http.get('http://localhost:3000/aprovestulist');
}
// decline student
declineStudent(id:any){
return this.http.delete('http://localhost:3000/declinestu/'+id);
}

// delete entrolled student
deleteStudent(id:any){
  return this.http.delete('http://localhost:3000/deletestu/'+id);
}

// approve trainer
approveTrainer(trainer:any){
  return this.http.put('http://localhost:3000/approvetrainer',trainer);
}
// aproved trainer list
aprovedTrainer(){
  return this.http.get('http://localhost:3000/aprovetralist');
}
// decline trainer
declineTrainer(id:any){
  return this.http.delete('http://localhost:3000/declinetrar/'+id);
}
// delete entrolled trainer
deleteTrainer(id:any){
  return this.http.delete('http://localhost:3000/deletetra/'+id);
}

}
