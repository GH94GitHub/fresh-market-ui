import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-number-option',
  templateUrl: './number-option.component.html',
  styleUrls: ['./number-option.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NumberOptionComponent {
  @Input() value!: number;
}
