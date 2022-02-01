import { TestBed } from '@angular/core/testing';

import { FormControlService } from './form-control.service';

describe('FormControlService', () => {
  let service: FormControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [FormControlService]});
    service = TestBed.inject(FormControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
