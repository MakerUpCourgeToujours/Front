import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isRoleB2bGuard } from './is-role-b2b.guard';

describe('isRoleInGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => isRoleB2bGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
