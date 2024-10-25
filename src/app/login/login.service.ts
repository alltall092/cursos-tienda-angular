import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

login(email:string,password:string):Observable<any>{
const login= this.http.post<User>('http://localhost:3000/login',{email,password});
return login;

}
}
