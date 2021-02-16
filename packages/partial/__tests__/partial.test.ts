import { partial } from '../src';

describe('@annexe/partial', () => {
  it('partially applies 1 argument', () => {
    const test = (a, b) => a + b;
    expect(partial(test, 1)(1)).toEqual(2);
  });

  it('partially applies more than 1 argument', () => {
    const test = (a, b, c, d) => a + b + c + d;
    expect(partial(test, 1, 1, 1)(1)).toEqual(4);
  });
});
