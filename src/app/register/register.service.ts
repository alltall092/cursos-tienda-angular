import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }

getUsers():Observable<User[]>{

return this.http.get<User[]>('http://localhost:3000/user');

}
postUsers(datos:any):Observable<any>{

return this.http.post<any>('http://localhost:3000/user',datos);

}
}
