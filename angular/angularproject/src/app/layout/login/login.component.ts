import { Component } from '@angular/core';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginInfo:any;
  userDatas:any[] = [];
  filteredUser:any[] = [];

  constructor(public _dbObj:DbserviceService, public _router:Router){

  }

  checkData(linfo:any){
    this.loginInfo = linfo;
    const {uid, upass} = this.loginInfo;

    console.log(this.loginInfo);
    this._dbObj.getRecord("user").subscribe((res:any)=>{
        console.log(res);
        this.userDatas = res;

        this.filteredUser = this.userDatas.filter((val, index)=>{
          return val.userid === uid && val.userpass === upass;
        })

        console.log(this.filteredUser);

        if(this.filteredUser.length > 0){
          window.alert("Login Successfull");
          sessionStorage.setItem("user",uid);
          sessionStorage.setItem("password", upass);
          this._router.navigate(["/maindash"]);
        }
        else{
          window.alert("Invalid User");
        }
          
    })
  }

}
