import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CubePipe } from '../shared/customPipe/cube.pipe';
import { SquarePipe } from '../shared/customPipe/square.pipe';

@Component({
  selector: 'app-mypipes',
  imports: [CommonModule, CubePipe, SquarePipe],
  templateUrl: './mypipes.component.html',
  styleUrl: './mypipes.component.css'
})
export class MypipesComponent {

  msg = "welcome to angular session";
  emp={is:11, name:"ajay", salary:90333, address:"Chennai"}

  dateObj = new Date();

}
