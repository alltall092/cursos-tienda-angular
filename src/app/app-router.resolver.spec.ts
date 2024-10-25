import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { appRouterResolver } from './app-router.resolver';

describe('appRouterResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => appRouterResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
