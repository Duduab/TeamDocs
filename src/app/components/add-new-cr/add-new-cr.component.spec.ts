import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCrComponent } from './add-new-cr.component';

describe('AddNewCrComponent', () => {
  let component: AddNewCrComponent;
  let fixture: ComponentFixture<AddNewCrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewCrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewCrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
