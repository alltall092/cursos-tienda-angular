import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap,Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DetallesCursosService } from './detalles-cursos.service';
import { map, of, switchMap} from 'rxjs';
import { Course } from '../class/course';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart/cart.service';
@Component({
  selector: 'app-detalles-cursos',
  standalone: true,
  imports: [RouterModule,HttpClientModule,CommonModule],
  templateUrl: './detalles-cursos.component.html',
  styleUrl: './detalles-cursos.component.scss',
  providers:[DetallesCursosService,CartService]
})
export class DetallesCursosComponent implements OnInit {
  course: Course[]=[];
constructor(private servi:DetallesCursosService,private route:ActivatedRoute, private servicart:CartService){}
addcart(courseId:number){
return this.servicart.addCart(courseId).subscribe(()=>console.log("agregado existoso"));

}
ngOnInit(): void {
  this.route.paramMap.pipe(map(params => {
      const courseId = params.get('id'); // Assuming 'id' is the parameter you need
      return courseId ? +courseId : null; // Convert string to number
    })
  ).subscribe(courseId => {
    console.log(courseId); // Now courseId is a number
    // You can now use courseId to fetch course details or other operations
    if (courseId !== null) {
      this.servi.getcourseById(courseId).subscribe((data:any) => {
        this.course=data;
        console.log(data);
      });
    }
  });
}}
