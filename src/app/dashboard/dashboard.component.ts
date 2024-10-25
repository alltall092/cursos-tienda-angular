import { Component, OnInit } from '@angular/core';
import { CursosComponent } from '../cursos/cursos.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardService } from './dashboard.service';
import { Contactos } from '../class/contactos';
import { CommonModule } from '@angular/common';
import { User } from '../class/User';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CursosComponent,HttpClientModule,CommonModule],
  providers:[DashboardService,HttpClientModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
constructor(private servi:DashboardService){}
contact:Contactos[]=[];
users:User[]=[];
ngOnInit(): void {
  this.servi.getContacto().subscribe(data=>this.contact=data);
  this.getUser();
}
getUser(){
  this.servi.getUser().subscribe(data=>this.users=data);
}
}
