import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SportCardComponent } from './sport-card.component';

describe('SportCardComponent', () => {
  let component: SportCardComponent;
  let fixture: ComponentFixture<SportCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SportCardComponent]
    });
    fixture = TestBed.createComponent(SportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
