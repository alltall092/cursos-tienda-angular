
import { Component, AfterViewInit, OnDestroy, Inject, PLATFORM_ID, OnInit } from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Cart } from '../class/cart';
import { CartService } from './cart.service';
import { HttpClientModule } from '@angular/common/http';
declare var paypal: any;
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,HttpClientModule,FormsModule],
  providers:[CartService],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent  implements AfterViewInit, OnDestroy,OnInit{
  private scriptElement!: HTMLScriptElement;
 carts:Cart[]=[];
total:any;

  constructor(@Inject(PLATFORM_ID) private platformId: Object, @Inject(DOCUMENT) private document: Document,private cartservi:CartService) { }
ngOnInit(): void {
  this.cartservi.getCart().subscribe(data=>{this.carts=data
    this.getTotal();

  });
}
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.addPayPalScript().then(() => {
        paypal.Buttons({
          style: {
            borderRadius: 10,
            color:'blue'
          },
          createOrder: (data:any, actions:any) => {
             // Supongamos que esta función devuelve información sobre los cursos
console.log(data);
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value:this.getTotal(),// Set up the transaction amount here
                  breakdown: {
                    item_total: {
                      currency_code: 'USD',
                      value:this.getTotal(),
                    }
                  }
                },
                
              }]
            });
          },
          onApprove: (data:any, actions:any) => {
            return actions.order.capture().then((details:any) => {
              // Transaction is successful. You can add your business logic here.
              console.log(details)
              console.log(data);
              alert('Transaction completed by ' + details.payer.name.given_name);
            });
          }
        }).render('#paypal-button-container');
      });
    }
  }

  ngOnDestroy() {
    if (isPlatformBrowser(this.platformId)) {
      // Remove the PayPal script when the component is destroyed
      const paypalScript = this.document.getElementById('paypal-sdk');
      if (paypalScript) {
        paypalScript.remove();
      }
    }
  }

  private addPayPalScript() {
    return new Promise((resolve, reject) => {
      this.scriptElement = this.document.createElement('script');
      this.scriptElement.src = `https://www.paypal.com/sdk/js?client-id=ATZzfbpglV5gbDt0Xy3n_O8dygddrlLe4-9Yx3Hi51i76A7EbrNG-8Yb6azf_OiOcLStCAPNRqAtnFZh&currency=USD`;
      this.scriptElement.id = 'paypal-sdk';
      this.scriptElement.onload = resolve;
      this.document.body.appendChild(this.scriptElement);
    });
  }
  getTotal(){

  
      return this.carts.reduce((total, cart) => total + (cart.price * cart.quantity), 0).toFixed() || null;
    
    


  }
  addquantity(id:number,quantity:number){
    const itemIndex = this.carts.findIndex(item => item.id === id);
    if (itemIndex !== -1) {
        // Clona el array carts y modifica la cantidad del elemento correspondiente
        const updatedCarts = this.carts.map((item, index) => {
            if (index === itemIndex) {
                return { ...item, quantity: quantity };
            }
            return item;
        });

        // Asigna el nuevo array actualizado a this.carts
        this.carts = updatedCarts;

        console.log(this.carts); // imprime el carrito actualizado
    } else {
        console.log("El ID proporcionado no se encuentra en el carrito.");
    }
    
    }
    increment(id:number,quantity:number){
           this.addquantity(id,quantity+1);


    }
    decrement(id:number,quantity:number){
      if(quantity>=2){
      this.addquantity(id,quantity-1);
      }


}

}
