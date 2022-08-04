import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(public http:HttpClient) { }
  getdata(){
    return this.http.get('http://localhost:3000/studentlearningdata')
  }
}
