import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCrReportComponent } from './single-cr-report.component';

describe('SingleCrReportComponent', () => {
  let component: SingleCrReportComponent;
  let fixture: ComponentFixture<SingleCrReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleCrReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCrReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
