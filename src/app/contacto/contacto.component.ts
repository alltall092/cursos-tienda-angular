
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { WhatsappComponent } from '../whatsapp/whatsapp.component';
import { ContactoService } from './contacto.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule,HeaderComponent,FooterComponent,WhatsappComponent,HttpClientModule,ReactiveFormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.scss',
  providers:[ContactoService,HttpClientModule]
})
export class ContactoComponent implements OnInit {
  profileForm!: FormGroup;
   datos={nombre:"",email:"",comentario:""}
 constructor(private servi:ContactoService,private fb:FormBuilder){

  
 }
 

  ngOnInit(): void {
     this.datos;
}

enviarSubmit(): void {
console.log(this.datos);
this.servi.postContacto(this.datos).subscribe(()=>console.log("guardado exitoso"));
}


}
