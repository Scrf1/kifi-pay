import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KifiFooterComponent } from './kifi-footer.component';

describe('KifiFooterComponent', () => {
  let component: KifiFooterComponent;
  let fixture: ComponentFixture<KifiFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KifiFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KifiFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
