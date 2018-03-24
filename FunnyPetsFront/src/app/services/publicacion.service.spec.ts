import { TestBed, inject } from '@angular/core/testing';

import { PublicacionService } from './publicacion.service';

describe('PublicacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacionService]
    });
  });

  it('should be created', inject([PublicacionService], (service: PublicacionService) => {
    expect(service).toBeTruthy();
  }));
});
