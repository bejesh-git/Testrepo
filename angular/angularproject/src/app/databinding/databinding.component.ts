import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';



// Decorator
@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
   myName:string = "Bejesh";

   colosseumImgpath:string = "./images/colosseum.webp";
   colosseumImgname:string = "colosseum";
   redeemerstatueImgpath:string = "./images/redeemerstatue.webp";
   redeemerstatueImgname:string = "redeemerstatue";

   inputData:string = "Whatsapp";

   greeting(val:string){
    window.alert(`Good morning ${val}`);
   }


}
