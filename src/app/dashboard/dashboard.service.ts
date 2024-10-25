import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactos } from '../class/contactos';
import { User } from '../class/User';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }

getContacto():Observable<Contactos[]>{
return this.http.get<Contactos[]>('http://localhost:3000/contacto');

}

getUser():Observable<User[]>{
  return this.http.get<User[]>('http://localhost:3000/user');
}
}
