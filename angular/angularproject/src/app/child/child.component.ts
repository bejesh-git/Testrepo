import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 
  @Input() pdata:any;
  @Output() eventObj = new EventEmitter();

  sendData(val:any){
    this.eventObj.emit(val);
  }

}
