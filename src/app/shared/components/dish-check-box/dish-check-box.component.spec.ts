import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DishCheckBoxComponent } from './dish-check-box.component';

describe('DishCheckBoxComponent', () => {
  let component: DishCheckBoxComponent;
  let fixture: ComponentFixture<DishCheckBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DishCheckBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DishCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
