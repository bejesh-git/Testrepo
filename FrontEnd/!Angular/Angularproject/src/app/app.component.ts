import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding/databinding.component';
import { DirectiveComponent } from './directive/directive.component';
import { ParentComponent } from './parent/parent.component';
import { MypipesComponent } from './mypipes/mypipes.component';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet,DatabindingComponent, DirectiveComponent, ParentComponent,
      MypipesComponent, HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularproject';
}
