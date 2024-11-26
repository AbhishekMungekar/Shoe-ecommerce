import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditproComponent } from './admin-editpro.component';

describe('AdminEditproComponent', () => {
  let component: AdminEditproComponent;
  let fixture: ComponentFixture<AdminEditproComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminEditproComponent]
    });
    fixture = TestBed.createComponent(AdminEditproComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
