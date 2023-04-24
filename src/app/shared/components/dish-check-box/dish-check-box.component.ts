import { Component,  EventEmitter,  HostListener,  Input, Output } from '@angular/core';
import { Dish } from 'src/app/types';

@Component({
  selector: 'app-dish-check-box',
  templateUrl: './dish-check-box.component.html',
  styleUrls: ['./dish-check-box.component.scss']
})
export class DishCheckBoxComponent {

  @Input() dish!: Dish;
  @Output() check: EventEmitter<[boolean, Dish]> = new EventEmitter();
  checked: boolean = false;
  isSeeMore: boolean = false;

  toggleDescriptionHeight(event: MouseEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    this.isSeeMore = !this.isSeeMore;
  }

  @HostListener('click')
  onDishChecked(event: MouseEvent): void {
    this.checked = !this.checked;
    this.check.emit([this.checked, this.dish]);
  }

  // Collapse description
  @HostListener('mouseleave')
  seeLess(): void {
    setTimeout(() => {
      this.isSeeMore = false;
    }, 100);
  }
}
