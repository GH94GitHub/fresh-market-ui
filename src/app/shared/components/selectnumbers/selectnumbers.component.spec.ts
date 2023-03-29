import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectnumbersComponent } from './selectnumbers.component';

describe('SelectnumbersComponent', () => {
  let component: SelectnumbersComponent;
  let fixture: ComponentFixture<SelectnumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectnumbersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectnumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
