import { Component, EventEmitter, Output } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-products',
  imports: [CommonModule, RouterLink, HeaderComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  option:any;
  allUser:any;

  currentUser:any={}

  constructor(private _dbObject:DbserviceService, private _route:ActivatedRoute){
    this.fetchUser();
  }

  
  productList:any = [];
  isButtonon:boolean = false;
  changeButtonStage(){
    this.isButtonon = !this.isButtonon;
  }
  
  ngOnInit(){
    this._route.params.subscribe((params:any)=>{
      this.option = params.category;
      this.fetchProducts();
      this.fetchUser();
    })
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
  fetchProducts(){
    this._dbObject.getValue("products").subscribe((res)=>{
      
      // All
      if(this.option === "all"){        
        this.productList = res;
      }      
      if(this.option === "veg"){
        this.productList = res;
        this.productList = this.productList.filter((val:any, index:any)=>{
          return val.isVeg
        });        
      }
      else if(this.option === "nonveg"){        
        this.productList = res;
        this.productList = this.productList.filter((val:any, index:any)=>{
          return val.isNonVeg
        });        
      }
      else if(this.option === "starters"){        
        this.productList = res;
        this.productList = this.productList.filter((val:any, index:any)=>{
          return val.isSnack
        });        
      }
      else if(this.option === "drinks"){        
        this.productList = res;
        this.productList = this.productList.filter((val:any, index:any)=>{
          return val.isDrink
        });        
      }
    })

  }


  // ================================================
  // ADD TO WISH LIST 
  addTowishlist(product:any){
    if(!!sessionStorage.getItem("email")){
      let isAvailable:boolean = false;
      this.fetchUser();
      // console.log(this.currentUser);
      if(this.currentUser.wishlist.length > 0){
          this.currentUser.wishlist.map((val:any, index:any)=>{
            if(val.name === product.name){
              isAvailable = true;
            }
        })
      }
      if(!isAvailable){
        const updatedCurrentUser = {...this.currentUser, wishlist:[...this.currentUser.wishlist, product]};
        // console.log("updated user",updatedCurrentUser);
        this._dbObject.editValue("user", updatedCurrentUser.id, updatedCurrentUser).subscribe(()=>{
          this.fetchUser();
          this.showCustomPromptW();
          sessionStorage.setItem("wlength",updatedCurrentUser.wishlist.length);
          location.reload();
        })
      }
    }
    else{
      window.alert("Please Loggin to access it");
    }

    
  }

  // ================================================
  // ADD TO CART
  addTocard(product:any){
    if(!!sessionStorage.getItem("email")){
      let isAvailable:boolean = false;
      this.fetchUser();
      // console.log(this.currentUser);
      if(this.currentUser.cart.length > 0){
          this.currentUser.cart.map((val:any, index:any)=>{
            if(val.name === product.name){
              isAvailable = true;
            }
        })
      }
      if(!isAvailable){
        const updatedCurrentUser = {...this.currentUser, cart:[...this.currentUser.cart, product]};
        // console.log("updated user",updatedCurrentUser);
        this._dbObject.editValue("user", updatedCurrentUser.id, updatedCurrentUser).subscribe(()=>{
          this.fetchUser();          
          this.showCustomPromptC();
          sessionStorage.setItem("clength",updatedCurrentUser.cart.length)
          location.reload();
        })
      }
    }
    else{
      window.alert("Please Loggin to access it");
    }
    
  }


  promptStyleW:any={
    display:"none"
  }
  promptStyleC:any={
    display:"none"
  }
  showCustomPromptC() {
    this.promptStyleC.display = 'block';
    setTimeout(() => {
    this.promptStyleC.display = 'none';
    }, 1000); 
  }
  showCustomPromptW() {
    this.promptStyleW.display = 'block';
    setTimeout(() => {
    this.promptStyleW.display = 'none';
    }, 1000); 
  }
  
  
  
  

}
