import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(public http:HttpClient) { }
  getMaterials(){
    console.log('hai');
    return this.http.get('http://localhost:3000/materials');
  }
}
