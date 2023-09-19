import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsServiceComponent } from './errors-service.component';

describe('ErrorsServiceComponent', () => {
  let component: ErrorsServiceComponent;
  let fixture: ComponentFixture<ErrorsServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
