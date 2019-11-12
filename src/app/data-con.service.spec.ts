import { TestBed } from '@angular/core/testing';

import { DataConService } from './data-con.service';

describe('DataConService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataConService = TestBed.get(DataConService);
    expect(service).toBeTruthy();
  });
});
