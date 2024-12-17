import { Component } from '@angular/core';
import { commonImagePath } from '../shared/constant/constantData';
import { ItemsserviceService } from '../shared/services/itemsservice.service';


@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {

  itemObj:any = new ItemsserviceService();

  // myitems:any[] = [
  //   {name:"Coffe", price:50, description:"Special Kumbakonan filter coffe", imgPath:commonImagePath.coffe},
  //   {name:"Taj-Mahal", price:0, description:"The famous Lovers Spot", imgPath:commonImagePath.tajmaha},
  //   {name:"Taj-Mahal", price:0, description:"Chinas Spacialty", imgPath:commonImagePath.GreatWallOfChina},
  //   {name:"Taj-Mahal", price:0, description:"The famous Lovers Spot", imgPath:commonImagePath.tajmaha},
  // ]


}
