import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorPortalComponent } from './error-portal.component';

describe('ErrorPortalComponent', () => {
  let component: ErrorPortalComponent;
  let fixture: ComponentFixture<ErrorPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorPortalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
