import { Component, HostListener, Input } from '@angular/core';
import { Dish } from 'src/app/types';

@Component({
  selector: 'app-dish-check-box',
  templateUrl: './dish-check-box.component.html',
  styleUrls: ['./dish-check-box.component.scss']
})
export class DishCheckBoxComponent {

  @Input() dish!: Dish;
  isSeeMore: boolean = false;

  toggleDescriptionHeight(event: MouseEvent) {
    event.preventDefault();
    this.isSeeMore = !this.isSeeMore;
  }

  doSeeLess(): void {
    setTimeout(() => {
      this.isSeeMore = false;
    }, 100);
  }
}
