/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SharedStateService } from './shared-state.service';

describe('Service: SharedState', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SharedStateService]
    });
  });

  it('should ...', inject([SharedStateService], (service: SharedStateService) => {
    expect(service).toBeTruthy();
  }));
});
