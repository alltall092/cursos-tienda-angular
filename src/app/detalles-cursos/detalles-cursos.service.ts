
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../class/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetallesCursosService {

  constructor(private http:HttpClient) { }

  getcourseById(courseId:number):Observable<Course>{
  return  this.http.get<Course>(`http://localhost:3000/course/${courseId}`);
  }
}
