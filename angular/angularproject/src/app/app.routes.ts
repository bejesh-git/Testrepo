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

export const routes: Routes = [
    // {path:"" , component:LoginComponent},
    {path:"" , redirectTo:"login", pathMatch:"full"},
    {path:"login" , component:LoginComponent},
    {path:"maindash" , component:MaindashboardComponent, children:[
            {path:"angform" , component:AngformComponent, children:[
                {path:"utdf", component:UtdfComponent},
                {path:"rtf", component:RtfComponent},
        ]},
    ]},

    {path:"databinding" , component:DatabindingComponent},
    {path:"mypipe" , component:MypipesComponent},
    
    
    {path:"task1" , component:ToggleimageComponent},
    {path:"task2" , component:ChangeimageComponent},
    {path:"task3" , component:BikescarsComponent},
    {path:"**" , component:PagenotfoundComponent},
];
