import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {
  constructor(public _router:Router){}

  loggout(){
    console.log(window.confirm("Are you sure"));
    if(window.confirm("Are you sure")){
      window.alert("Loggout successfull");
      sessionStorage.clear();
      this._router.navigate(["/"]);
    }
  }

}
