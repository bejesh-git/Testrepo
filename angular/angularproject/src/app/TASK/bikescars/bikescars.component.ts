import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-bikescars',
  imports: [CommonModule],
  templateUrl: './bikescars.component.html',
  styleUrl: './bikescars.component.css'
})
export class BikescarsComponent {
  bikes:string[] = ["Hero-Honda", "KTM", "RoyalEnfield", "Bajaj", "Tvs", "Yamaha"]
  cars:string[] = ["Maruti Suzuki", "tata", "kia", "toyota", "bmw", "Honda"]

  displayVehicle:string="bike";

  selectedVehicle:string="";
}
