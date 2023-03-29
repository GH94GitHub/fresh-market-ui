import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-number-option',
  templateUrl: './number-option.component.html',
  styleUrls: ['./number-option.component.scss']
})
export class NumberOptionComponent {
  @Input() value!: number;
}
