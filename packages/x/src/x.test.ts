import { describe, expect, it } from 'vitest';

import { x$ } from '.';

describe('x$', () => {
  it('does stuff', () => {
    expect(x$).toEqual(x$);
    expect(x$()).toEqual(x$());
  });
});
