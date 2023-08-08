import { Component } from '@angular/core';
import { Direction } from './direction.model';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name: string = "";
  description: string = "";
  price: number = 0;
  direction: Direction = Direction.Up;
  isAvailable: boolean = false;
}
