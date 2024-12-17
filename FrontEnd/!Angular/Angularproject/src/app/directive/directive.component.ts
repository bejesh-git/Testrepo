import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-directive',
  imports: [CommonModule],
  templateUrl: './directive.component.html',
  styleUrl: './directive.component.css'
})
export class DirectiveComponent {
  isCond1:boolean = true;
  isCond2:boolean = false;
  isCond3:boolean = true;

  courses:string[] = ["React", "Angular", "Python", "DotNet", "java"];
  myCourse:string = "React";

  myStyle = {
    color:this.isCond1?"red":"blue",
    backgroundColor:this.isCond2?"aqua":"aqua"
  }

  myClass= {
    "txtPrimary":true,
    "txtDanger":true,
    "special":true
  }

}
 
