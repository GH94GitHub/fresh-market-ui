import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCheckListComponent } from './dish-check-list.component';

describe('DishCheckListComponent', () => {
  let component: DishCheckListComponent;
  let fixture: ComponentFixture<DishCheckListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCheckListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
