import { TestBed } from '@angular/core/testing';

import { MytestserService } from './mytestser.service';

describe('MytestserService', () => {
  let service: MytestserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MytestserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('check mul', () => {
    let serOBj = new MytestserService();
    let result = serOBj.mul(8, 5);
    expect(result).toBe(100);
  });

});
