import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KifiHeaderComponent } from './kifi-header.component';

describe('KifiHeaderComponent', () => {
  let component: KifiHeaderComponent;
  let fixture: ComponentFixture<KifiHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KifiHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KifiHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
