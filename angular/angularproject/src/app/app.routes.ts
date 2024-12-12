import { Routes } from '@angular/router';
import { DatabindingComponent } from './databinding/databinding.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './layout/login/login.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { AngformComponent } from './forms/angform/angform.component';
import { UtdfComponent } from './forms/utdf/utdf.component';
import { RtfComponent } from './forms/rtf/rtf.component';
import { MaindashboardComponent } from './layout/maindashboard/maindashboard.component';
import { ChangeimageComponent } from './TASK/changeimage/changeimage.component';
import { ToggleimageComponent } from './TASK/toggleimage/toggleimage.component';
import { BikescarsComponent } from './TASK/bikescars/bikescars.component';
import { ItemComponent } from './item/item.component';
import { ProductDashComponent } from './CRUD/product-dash/product-dash.component';
import { ProductEditComponent } from './CRUD/product-edit/product-edit.component';
import { ProductAddComponent } from './CRUD/product-add/product-add.component';

export const routes: Routes = [
    // {path:"" , component:LoginComponent},
    {path:"" , redirectTo:"login", pathMatch:"full"},
    {path:"login" , component:LoginComponent},
    {path:"maindash" , component:MaindashboardComponent, children:[
            {path:"angform" , component:AngformComponent, children:[
                {path:"utdf", component:UtdfComponent},
                {path:"rtf", component:RtfComponent},
        ]},
        
        {path:"items" , component:ItemComponent},
        {path:"productdash" , component:ProductDashComponent},
        {path:"productedit/:id" , component:ProductEditComponent},
        {path:"productadd" , component:ProductAddComponent},
        
        
        
        {path:"task1" , component:ToggleimageComponent},
        {path:"task2" , component:ChangeimageComponent},
        {path:"task3" , component:BikescarsComponent},
    ]},

    {path:"databinding" , component:DatabindingComponent},
    {path:"mypipe" , component:MypipesComponent},
    
    
    {path:"**" , component:PagenotfoundComponent},
];
