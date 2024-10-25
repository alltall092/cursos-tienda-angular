import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartService } from '../cart/cart.service';
import { Cart } from '../class/cart';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  providers:[CartService],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  items:Cart[]=[];
  constructor(private servicart:CartService){}


  ngOnInit(): void {
    
    this.servicart.getCart().subscribe(data=>this.items=data);
  }
}
