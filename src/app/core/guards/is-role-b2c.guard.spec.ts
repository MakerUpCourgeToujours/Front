import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isRoleB2cGuard } from './is-role-b2c.guard';

describe('isRoleB2CGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
      TestBed.runInInjectionContext(() => isRoleB2cGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
