import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http:HttpClient) { }

postContacto(datos:any):Observable<any>{
return  this.http.post('http://localhost:3000/contacto',datos);
}
}