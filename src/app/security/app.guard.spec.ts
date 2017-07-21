import { TestBed, async, inject } from '@angular/core/testing';

import { GardAppGuard } from './app.guard';

describe('GardAppGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GardAppGuard]
    });
  });

  it('should ...', inject([GardAppGuard], (guard: GardAppGuard) => {
    expect(guard).toBeTruthy();
  }));
});
