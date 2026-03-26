import { TestBed } from '@angular/core/testing';

import { LibroObservable } from './libro-observable';

describe('LibroObservable', () => {
  let service: LibroObservable;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroObservable);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
