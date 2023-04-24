import { Component, EventEmitter, Input, OnInit, Output, Renderer2 } from '@angular/core';

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

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {
    // TODO: Make Default Value work propertly
    this.changeSelection(this._range[0]);
  }

  changeSelection(num: number): void {
    this.selectionChange.emit(num);
  }

  optionClicked(event: MouseEvent, num: number): void {
    // remove selected from previous
    let container: HTMLElement = (event.target as HTMLElement).parentElement!.parentElement!.parentElement!;
    let selected: HTMLElement|null = container.querySelector('.selected');

    if(selected!=null){
      this.renderer.removeClass(selected, 'selected');
    }

    // Mark current selected and emit new value
    let newSelection = (event.target as HTMLElement).parentElement!.parentElement;
    this.renderer.addClass(newSelection, 'selected');
    this.changeSelection(num);
  }
}
