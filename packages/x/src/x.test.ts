import { describe, expect, it } from 'vitest';

import { x$ } from '.';

describe('x$', () => {
  it('must be initialized before it will work', () => {
    expect(() => x$()).toThrow('x$ must be initialized before it can be used');
    x$.initialize();
    expect(() => x$()).not.toThrow();
  });

  it('returns one or more methods based on configuration', () => {
    const { testFn } = x$({
      testFn: {},
    });

    expect(testFn).toBeTypeOf('function');
  });
});
