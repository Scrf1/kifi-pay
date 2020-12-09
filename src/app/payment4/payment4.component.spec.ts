import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Payment4Component } from './payment4.component';

describe('Payment4Component', () => {
  let component: Payment4Component;
  let fixture: ComponentFixture<Payment4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Payment4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Payment4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
