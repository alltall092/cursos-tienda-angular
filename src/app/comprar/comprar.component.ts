
import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Course } from '../class/course';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.scss',
  providers:[CourseService,HttpClientModule]
})
export class ComprarComponent implements OnInit{
courses:Course[]=[];
constructor(private  servi:CourseService){}
ngOnInit(): void {
  this.servi.getCourse().subscribe(data=>this.courses=data);
}
}
