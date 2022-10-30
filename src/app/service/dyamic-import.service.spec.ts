import { TestBed } from '@angular/core/testing';

import { DyamicImportService } from './dyamic-import.service';

describe('DyamicImportService', () => {
  let service: DyamicImportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DyamicImportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
