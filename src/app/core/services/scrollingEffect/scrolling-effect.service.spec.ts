import { TestBed } from '@angular/core/testing';

import { ScrollingEffectService } from './scrolling-effect.service';

describe('ScrollingEffectService', () => {
  let service: ScrollingEffectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScrollingEffectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
