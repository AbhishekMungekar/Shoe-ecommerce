import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMensComponent } from './all-mens.component';

describe('AllMensComponent', () => {
  let component: AllMensComponent;
  let fixture: ComponentFixture<AllMensComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllMensComponent]
    });
    fixture = TestBed.createComponent(AllMensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
