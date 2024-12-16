import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [FormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  allUsers: any = [];
  currentUserData: any = [];

  constructor(private _dbObj: DbserviceService, private _router: Router) { }

  ngOnInit() {
    this._dbObj.getValue("user").subscribe((res) => {
      this.allUsers = res;
    });
  }

  addUser(userData: any) {
    console.log(userData);
    console.log(this.allUsers);

    const matchData = this.allUsers.filter((val: any, index: any) => {
      return val.email === userData.email
    });

    if (matchData.length > 0) {
      window.alert("Email is Already in use");
    }
    else {
      let correctDate = { ...userData, wishlist: [], cart: [] };
      this._dbObj.addValue("user", correctDate).subscribe(() => {
        window.alert("Registration Successfull");
        sessionStorage.setItem("fname", correctDate.fname);
        sessionStorage.setItem("email", correctDate.email);
        sessionStorage.setItem("password", correctDate.password);
        this._router.navigate(["/"]);
      });
    }
  }


  ngOnDestroy(){
    location.reload();
  }
}
