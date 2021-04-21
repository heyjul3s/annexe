import { partial } from '../src';

describe('@annexe/partial', () => {
  it('partially applies 1 argument', () => {
    const test = (a, b) => a + b;
    const partialed = partial<number[], number[], number>(test, 1);
    expect(partialed(2)).toEqual(3);
  });

  it('partially applies more than 1 argument', () => {
    const test = (a, b, c, d) => a + b + c + d;
    const partialed = partial<number[], number[], number>(test, 1, 2, 3);
    expect(partialed(4)).toEqual(10);
  });
});
