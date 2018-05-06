import { TestBed, inject } from '@angular/core/testing';

import { EdituserformService } from './edituserform.service';

describe('EdituserformService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EdituserformService]
    });
  });

  it('should be created', inject([EdituserformService], (service: EdituserformService) => {
    expect(service).toBeTruthy();
  }));
});
