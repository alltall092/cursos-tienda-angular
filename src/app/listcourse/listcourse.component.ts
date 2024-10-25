
import { Component, OnInit } from '@angular/core';
import { Course } from '../class/course';
import { CourseService } from '../course.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Categories } from '../class/categories';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { HeaderComponent } from '../header/header.component';
import { BuscadorPipe } from '../buscador.pipe';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { Cart } from '../class/cart';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappComponent } from '../whatsapp/whatsapp.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listcourse',
  standalone: true,
  imports: [CommonModule,HttpClientModule,ButtonsModule,HeaderComponent,FormsModule,BuscadorPipe,HeaderComponent,FooterComponent,WhatsappComponent],
  providers:[CourseService,HttpClientModule,CartService],
  templateUrl: './listcourse.component.html',
  styleUrl: './listcourse.component.scss'
})
export class ListcourseComponent  implements OnInit {
course:Course[]=[];
categories:Categories[]=[];
filteredItems: Course[] = [];
categoriesId:number=0;
search="";
item:Cart[]=[];
constructor(private servicourse:CourseService,private cartservi:CartService,private router:Router){

}


ngOnInit(): void {
  
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.servicourse.getCourse().subscribe((data:Course[])=>{this.course=data
  this.filteredItems = this.course; 
});
this.servicourse.getCategories().subscribe((cats:Categories[])=>{this.categories=cats})  
this.getcart();
}


getCategoryById(categoryId:number){
this.filteredItems=this.course.filter(x=>x.courseId===categoryId);
this.categoriesId=categoryId;

}
getcart(){
return this.cartservi.getCart().subscribe(data=>this.item=data);

}
addCart(courseId:number){

return this.cartservi.addCart(courseId).subscribe(()=>this.getcart());
  
}
navegarDetalles(id:number){
  return this.router.navigate(['/detallescursos',id]);
}


}
