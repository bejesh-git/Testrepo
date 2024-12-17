import { Routes } from '@angular/router';
import { ProductsComponent } from './layout/products/products.component';
import { HomepageComponent } from './layout/homepage/homepage.component';
import { PagenotfoundComponent } from './layout/pagenotfound/pagenotfound.component';
import { IndexComponent } from './index/index.component';
import { AboutusComponent } from './layout/aboutus/aboutus.component';
import { RegisterComponent } from './user/register/register.component';
import { LogginComponent } from './user/loggin/loggin.component';
import { CartComponent } from './user/cart/cart.component';

export const routes: Routes = [

    {path:"", component:IndexComponent, children:[

        {path:"", component:HomepageComponent},
        {path:"about", component:AboutusComponent},
        {path:"products/:category", component:ProductsComponent},




       
        {path:"cart", component:CartComponent},
        {path:"userloggin", component:LogginComponent},
        {path:"usersignup", component:RegisterComponent},
    ]},


    {path:"**", component:PagenotfoundComponent}
];
