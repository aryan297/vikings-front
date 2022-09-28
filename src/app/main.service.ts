import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Property } from './property.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {

   host:string='http://localhost:3000'

  constructor(private http:HttpClient) { 

  }
  postData(data:any){
    return this.http.post<Property>(this.host +'/property' ,data)
  }
  getData(){
    return this.http.get<Property[]>(this.host +'/property' )
  }
  delete(id:any){
    const url=`${this.host}/property/${id}`
    console.log(`${this.host}/property/${id}`);
    return this.http.delete<Property>(url)
  }
}
