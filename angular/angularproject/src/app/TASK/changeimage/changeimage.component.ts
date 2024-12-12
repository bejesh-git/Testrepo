import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-changeimage',
  imports: [CommonModule],
  templateUrl: './changeimage.component.html',
  styleUrl: './changeimage.component.css'
})
export class ChangeimageComponent {
  imageNumber:number = 1;
  
  
  changeImage(option:number){
    this.imageNumber = option;
  }
}
 