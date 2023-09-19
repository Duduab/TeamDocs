import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDailyReportComponent } from './single-daily-report.component';

describe('SingleDailyReportComponent', () => {
  let component: SingleDailyReportComponent;
  let fixture: ComponentFixture<SingleDailyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleDailyReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDailyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
