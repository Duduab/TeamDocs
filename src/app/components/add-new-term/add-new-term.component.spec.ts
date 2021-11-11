import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewTermComponent } from './add-new-term.component';

describe('AddNewTermComponent', () => {
  let component: AddNewTermComponent;
  let fixture: ComponentFixture<AddNewTermComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewTermComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewTermComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
