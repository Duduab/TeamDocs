import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrPlanComponent } from './cr-plan.component';

describe('CrPlanComponent', () => {
  let component: CrPlanComponent;
  let fixture: ComponentFixture<CrPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
