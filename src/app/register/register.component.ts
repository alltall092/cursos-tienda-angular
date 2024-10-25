import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { RegisterService } from './register.service';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule,FormsModule],
  providers:[RegisterService,HttpClientModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
formdatos!:FormGroup;
constructor(private servi:RegisterService,public fb:FormBuilder){}
ngOnInit(): void {
  this.formdatos=this.fb.group({
    username:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    confirmPassword:new FormControl('',[Validators.required])
    
  },{ validator: this.checkPasswords })
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  
}
checkPasswords(group: FormGroup) {
  const password = group.get('password')?.value;
  const confirmPassword = group.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { notSame: true };
}
postRegister(){
if(this.formdatos.valid){
const datos={username:this.formdatos.get('username')?.value,
  email:this.formdatos.get('email')?.value,
  password:this.formdatos.get('password')?.value
}

  this.servi.postUsers(datos).subscribe(data=>console.log(data));
}
}
}
