import { TestBed, inject } from '@angular/core/testing';

import { ListusersService } from './listusers.service';

describe('ListusersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ListusersService]
    });
  });

  it('should be created', inject([ListusersService], (service: ListusersService) => {
    expect(service).toBeTruthy();
  }));
});
