import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-toggleimage',
  imports: [CommonModule],
  templateUrl: './toggleimage.component.html',
  styleUrl: './toggleimage.component.css'
})
export class ToggleimageComponent {
  imageTitle:string = "I am using Instagram";
  imageSrc:string = "./images/instagram.jpg";
  imageNo:number = 1;
  containerClass:string = "container instagram";
  
  changeImage(){
    if(this.imageNo === 1){
      this.imageNo = 2;
      this.imageTitle = "I am using Whatsapp";
      this.imageSrc = "./images/whatsapp.jpg";
      this.containerClass = "container whatsapp";
      
    }
    else if(this.imageNo === 2){
      this.imageNo = 3;
      this.imageTitle = "I am not using facebook";
      this.imageSrc = "./images/facebook.jpg";
      this.containerClass = "container facebook";
    }
    else if(this.imageNo === 3){
      this.imageNo = 1;
      this.imageTitle = "I am using Instagram";
      this.imageSrc = "./images/instagram.jpg";
      this.containerClass = "container instagram";
    }
  }

}
