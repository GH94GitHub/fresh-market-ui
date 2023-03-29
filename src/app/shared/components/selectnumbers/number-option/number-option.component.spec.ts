import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberOptionComponent } from './number-option.component';

describe('NumberOptionComponent', () => {
  let component: NumberOptionComponent;
  let fixture: ComponentFixture<NumberOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberOptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumberOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
