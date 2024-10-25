
import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup,ReactiveFormsModule,Validators } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule,RouterModule,ReactiveFormsModule,CommonModule],
  providers:[LoginService,HttpClientModule],
 templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

formdatos!:FormGroup;
islogin:boolean=false;
loginMessage: string = ''; 
messageTimeout: any;
constructor(private servilogin:LoginService,private router:Router,public fb:FormBuilder){}
ngOnInit(): void {
this.formdatos=this.fb.group({
  email:new FormControl('',[Validators.required,Validators.email]),
password:new FormControl('',[Validators.required])});
}
postLogin(){
  
  const controlemail:any=this.formdatos.get('email');
  const controlpassword:any=this.formdatos.get('password');``
  if (this.formdatos.valid) {
if (controlemail !== null  || controlpassword !==null) {

  const email = controlemail.value;

const password=controlpassword.value
console.log(email,password)
this.servilogin.login(email,password).subscribe(data=>{
const token=data.token;
const user=data.email;
localStorage.setItem('token',token);
localStorage.setItem('user',user);
this.islogin=true;
this.loginMessage = '¡Login exitoso!'
this.messageTimeout = setInterval(() => {
  this.loginMessage = ''; // Borrar el mensaje después del intervalo
  clearInterval(this.messageTimeout); // Limpiar el intervalo
}, 5000); // Intervalo 
this.router.navigate(['/dashboard'])


},error => {
  console.error('Error en la llamada al servicio de login:', error);
  // Manejar el error adecuadamente, por ejemplo, mostrar un mensaje al usuario
});
}
}
}

}

