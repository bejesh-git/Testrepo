import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router, RouterLink } from '@angular/router';
import { ProductsComponent } from '../products/products.component';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  
  allUser:any;
  typeList:any = {
    display:"none"
  }
  isLogged:any = !!sessionStorage.getItem("email");
  currentUserCartLength:any=0;
  currentUserwishlistLength:any=0;
  currentUserName:any="";

  constructor(private _dbObject:DbserviceService, private _router:Router){
      this.updateCount();
   }



    
  updateCount(){
    this.currentUserCartLength = sessionStorage.getItem("clength");
    this.currentUserwishlistLength = sessionStorage.getItem("wlength");
    this.currentUserName = sessionStorage.getItem("fname");
  }


  onMouseOver(){
    this.typeList.display = "block";
  }
  onMouseOut(){
    this.typeList.display = "none";
  }


  // ================================================
  // ADD TO WISH LIST
  addTowishlist(){
    if(!!sessionStorage.getItem("email")){
      this._router.navigate(["/cart"]);
    }
    else{
      window.alert("Please Loggin to access it");
    }
  }
  
  // ================================================
  // ADD TO CART LIST
  addTocard(){
    if(!!sessionStorage.getItem("email")){
      this._router.navigate(["/cart"]);      
    }
    else{
      window.alert("Please Loggin to access it");
    }

  }

// ================================================
  // SIGNOUT
  signout(){
    if(window.confirm("Are you sure")){
      sessionStorage.clear();
      window.alert("Logged Out");
      this._router.navigate(["/"]);
      location.reload();
    }
  }



}
