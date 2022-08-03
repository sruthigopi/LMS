import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  constructor(public http:HttpClient) { }
  // getMaterials(){
   
  //   return this.http.get('http://localhost:3000/materials');
  // }
  Addmaterial(formdata:FormData){
    return this.http.post<any>('http://localhost:3000/traineraddmaterial',formdata)
    .subscribe(
      (res)=>console.log(res)
      
    );
  }
    // get the materials
    getMaterial(){
      return this.http.get('http://localhost:3000/materials');
    }
}
