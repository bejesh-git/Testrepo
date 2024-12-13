import { Component } from '@angular/core';
import { CONSTANTDATA } from '../shared/constdata/constantdata';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test',
  imports: [CommonModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  imgPaths:any = CONSTANTDATA;
}
