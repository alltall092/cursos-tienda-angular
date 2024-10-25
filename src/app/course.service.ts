import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categories } from './class/categories';
import { Observable } from 'rxjs';
import { Course } from './class/course';
@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http:HttpClient) {  }

 getCategories():Observable<Categories[]>{

  const categories=  this.http.get<Categories[]>('http://localhost:3000/categories');
  return categories;

  

}
postCourses(datos:FormData):Observable<Course>{
const course=this.http.post<Course>('http://localhost:3000/course',datos);
return course;



}
getCourse():Observable<Course[]>{
const course=this.http.get<Course[]>('http://localhost:3000/course');
return course;


}
}
