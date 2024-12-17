import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  typeList:any = {
    display:"none"
  }

  onMouseOver(){
    this.typeList.display = "block";
  }
  onMouseOut(){
    this.typeList.display = "none";
  }
    
}
