import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';

@Component({
  selector: 'app-product-add',
  imports: [FormsModule, RouterLink],
  templateUrl: './product-add.component.html',
  styleUrl: './product-add.component.css'
})
export class ProductAddComponent {
constructor(public dbObj:DbserviceService, public router:Router){}

addData(data:any){
  console.log(data);
  this.dbObj.postRecord("products", data).subscribe(()=>{
    window.alert("Add successful");
    this.router.navigate(["/maindash/productdash"]);
  })
}
  

}
