import { Component, Input, Output, EventEmitter, SimpleChanges, OnChanges, OnInit, } from '@angular/core';

@Component({
  selector: 'number-range',
  templateUrl: './number-range.component.html',
  styleUrls: ['./number-range.component.scss'],
})
export class NumberRangeComponent implements OnInit  {
  @Input() range: number[] = [];
  @Output() numberSelected = new EventEmitter<number>();

  selectedNumber!: number;

  constructor() {}
  ngOnInit(): void {
    this.selectedNumber =
        this.range.length % 2 === 0
          ? this.range[Math.floor(this.range.length / 2) - 1]
          : this.range[Math.floor(this.range.length / 2)];
  }

  selectNumber(number: number) {
    this.selectedNumber = number;
    this.numberSelected.emit(number);
  }

  get numbers(): number[] {
    return this.range.sort((a, b) => a - b);
  }
}
