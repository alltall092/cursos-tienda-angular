import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from '../header/header.component';

import { Component, Injectable, OnInit } from '@angular/core';
import { CourseService } from '../course.service';
import { Categories } from '../class/categories';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormGroup,FormControl,FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-cursos',
  standalone: true,

  imports: [CommonModule,HttpClientModule,ReactiveFormsModule,HeaderComponent],
  providers:[CourseService],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent implements OnInit {
  categories:Categories[]=[];
  datosform!: FormGroup;

constructor(private servicourse:CourseService,public fb:FormBuilder){}

ngOnInit(): void {
  this.agregarcursos();
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
this.servicourse.getCategories().subscribe((cats:Categories[])=>{this.categories=cats})  
}

agregarcursos(): void {
  this.datosform = this.fb.group({
    imagenes: new FormControl(null), // Use null initially for file input
  });
}



// Function to handle file input change event
onFileChange(event: any): void {
  const file = (event.target as HTMLInputElement).files?.[0]; // Using optional chaining operator
  if (file) {
    this.datosform.patchValue({
      imagenes: file.name
    });
    this.datosform.get('imagenes')?.updateValueAndValidity(); // Optional chaining for get() method
  }
}

// Function to handle form submission
onSubmit(): void {
  if (this.datosform && this.datosform.valid) { // Checking if datosform is not null before accessing valid property
    const formData = new FormData();
    formData.append('imagenes', this.datosform.get('imagenes')?.value); // Optional chaining for get() method
    console.log(this.datosform.get('imagenes')?.value)
    this.servicourse.postCourses(formData).subscribe(()=>console.log('subido con exitos'));
    // Aquí debes continuar con tu lógica para enviar formData a tu servidor o realizar otras acciones
  } else {
    // Manejo de errores o validación adicional
  }
}


}


