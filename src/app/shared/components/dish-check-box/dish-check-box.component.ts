import { Component, Input } from '@angular/core';
import { Dish } from 'src/app/types';

@Component({
  selector: 'app-dish-check-box',
  templateUrl: './dish-check-box.component.html',
  styleUrls: ['./dish-check-box.component.scss']
})
export class DishCheckBoxComponent {

  @Input() dish!: Dish;
}
