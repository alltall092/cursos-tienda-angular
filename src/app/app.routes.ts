
import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { HomeComponent } from './home/home.component';
import {CursosComponent} from './cursos/cursos.component';
import { ListcourseComponent } from './listcourse/listcourse.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import {RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactoComponent } from './contacto/contacto.component';
import { AboutComponent } from './about/about.component';
import { ComprarComponent } from './comprar/comprar.component';
import { DetallesCursosComponent } from './detalles-cursos/detalles-cursos.component';
export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'products',component:ProductsComponent},
    {path:'contacts',component:ContactoComponent},
    {path:'about',component:AboutComponent},
{path:'agregarcursos',component:CursosComponent},
{path:'cursos',component:ListcourseComponent},
{path:'cart',component:CartComponent},{
path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'dashboard',component:DashboardComponent},
{path:'comprar',component:ComprarComponent},
{path:'detallescursos/:id',component:DetallesCursosComponent}];


