import { TestBed } from '@angular/core/testing';

import { AdditionalServiceItemService } from './additional-service-item.service';

describe('AdditionalServiceItemService', () => {
  let service: AdditionalServiceItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdditionalServiceItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
