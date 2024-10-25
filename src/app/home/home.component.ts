import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { CourseService } from '../course.service';
import { Course } from '../class/course';
import { WhatsappComponent } from '../whatsapp/whatsapp.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,WhatsappComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent  implements OnInit{
  course:Course[]=[];
  constructor(public servi:CourseService){}
ngOnInit(): void {
  this.servi.getCourse().subscribe(data=>this.course=data);
}
}
