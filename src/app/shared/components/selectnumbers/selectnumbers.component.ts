import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-selectnumbers',
  templateUrl: './selectnumbers.component.html',
  styleUrls: ['./selectnumbers.component.scss']
})
export class SelectnumbersComponent implements OnInit {

  private _range: number[] = [];

  @Input("range") set range(nums: number[]) {
    this._range=nums;
  }
  get range(): number[] {
    return this._range;
  }

  @Output("selectionChange") selectionChange = new EventEmitter<number>();
  ngOnInit(): void {
    this.selectionChange.emit(2);
  }

  changeSelection(num: number): void {
    this.selectionChange.emit(num);
  }

}
