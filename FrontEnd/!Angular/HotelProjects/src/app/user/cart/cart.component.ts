import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  allUser:any = [];
  currentUser: any = {"cart":[], "wishlist":[]};

  constructor(private _dbObject:DbserviceService){
    this.fetchUser();
    console.log(this.currentUser)
  }


  fetchUser(){
    this._dbObject.getValue("user").subscribe((res)=>{
      this.allUser = res;
      this.currentUser = this.allUser.filter((val:any, index:any)=>{
        const email = sessionStorage.getItem('email');
        return val.email === email;
      })[0];
    })
  }


  removeFromWishlist(product:any){
    let updatedWishlist = this.currentUser.wishlist.filter((value:any, index:any) => {
      console.log(value.name !== product.name) ; 
      return value.name !== product.name;
      })
    const updatedUser = {...this.currentUser, wishlist:updatedWishlist};
    this._dbObject.editValue("user", this.currentUser.id, updatedUser).subscribe(()=>{
      this.fetchUser();
      sessionStorage.setItem("wlength",updatedUser.cart.length)
    });
  }
  
  removeFromCart(product:any){
    let updatedCart = this.currentUser.cart.filter((value:any, index:any) => {
      return value.name !== product.name;
      })
    const updatedUser = {...this.currentUser, cart:updatedCart};
    this._dbObject.editValue("user", this.currentUser.id, updatedUser).subscribe(()=>{
      this.fetchUser();
      sessionStorage.setItem("clength",updatedUser.cart.length)
    });
  }

  ngOnDestroy(){
    location.reload();
  }
}
