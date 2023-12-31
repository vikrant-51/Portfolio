import { TestBed } from '@angular/core/testing';

import { FetchProjectsService } from './fetch-projects.service';

describe('FetchProjectsService', () => {
  let service: FetchProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
