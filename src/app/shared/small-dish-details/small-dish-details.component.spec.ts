import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallDishDetailsComponent } from './small-dish-details.component';

describe('SmallDishDetailsComponent', () => {
  let component: SmallDishDetailsComponent;
  let fixture: ComponentFixture<SmallDishDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallDishDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallDishDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
