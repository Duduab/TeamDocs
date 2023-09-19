import { TestBed } from '@angular/core/testing';

import { CrplanService } from './crplan.service';

describe('CrplanService', () => {
  let service: CrplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
