import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loggin',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './loggin.component.html',
  styleUrl: './loggin.component.css'
})
export class LogginComponent {

  allUsers: any = [];
  currentUserData: any = [];

  constructor(private _dbObj: DbserviceService, private _router: Router) {
    _dbObj.getValue("user").subscribe((res) => {
      this.allUsers = res;
    });
  }

  checkUser(logInfo: any) {

    this.currentUserData = this.allUsers.filter((val: any, index: any) => {
      if (logInfo.email === val.email && logInfo.password === val.password) {
        sessionStorage.setItem("fname", val.fname);
        sessionStorage.setItem("email", logInfo.email);
        sessionStorage.setItem("password", logInfo.password);
        sessionStorage.setItem("clength", val.cart.length);
        sessionStorage.setItem("wlength",val.wishlist.length);
        return true;
      }
      else { return false }
    });

    if (this.currentUserData.length > 0) {
      // window.alert("Welcome user");


      this._router.navigate(["/"]);
    }
    else {
      window.alert("User Doesn't exist");
    }
  }

  ngOnDestroy() {
    location.reload();
  }




}
