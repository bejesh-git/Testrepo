import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DbserviceService } from '../../shared/services/dbservice.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-edit',
  imports: [FormsModule],
  templateUrl: './product-edit.component.html',
  styleUrl: './product-edit.component.css'
})
export class ProductEditComponent {
  constructor(public _route:ActivatedRoute , public _dbObj:DbserviceService, public _router:Router){}

  id:any;
  product:any;

  ngOnInit(){
    console.log("Rendered");
      this._route.params.subscribe((param:any)=>{
        this.id = param.id;
      })
      this.fetchProduct();
  }

  fetchProduct(){
    this._dbObj.getSingleRecord("products", this.id).subscribe((res:any)=>{
      console.log(res);
      this.product = res;
    });
  }
  
  updateData(val:any){
    console.log(val);
    this._dbObj.putRecord("products", this.product.id, val).subscribe(()=>{
      window.alert("Edit Successfull");
      this.fetchProduct();
      this._router.navigate(['/maindash/productdash']);
    })
  }
}
