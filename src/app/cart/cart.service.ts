
import { DoCheck, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../class/cart';
import { Observable, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }



 getCart():Observable<Cart[]>{

  const getcart=this.http.get<Cart[]>('http://localhost:3000/cart').pipe(map(x=>x.flat()));
  return getcart;
  

}
 addCart(courseId:number):Observable<any>{

  const cart=this.http.post<any>('http://localhost:3000/cart/addcart',{courseId:courseId});

return cart;


}
deleteCart(id:number):Observable<any>{
return this.http.delete(`http://localhost:3000/cart/${id}`);


}
postOrder(datos:any):Observable<any>{
return this.http.post('http://localhost:3000/order',datos);

}

}
