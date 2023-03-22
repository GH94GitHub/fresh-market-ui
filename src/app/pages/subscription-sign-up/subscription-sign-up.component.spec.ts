import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionSignUpComponent } from './subscription-sign-up.component';

describe('SubscriptionSignUpComponent', () => {
  let component: SubscriptionSignUpComponent;
  let fixture: ComponentFixture<SubscriptionSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubscriptionSignUpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
