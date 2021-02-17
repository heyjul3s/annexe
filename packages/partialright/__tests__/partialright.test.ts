import { partialRight } from '../src';

describe('@annexe/partialright', () => {
  it('partially applies 1 argument from the right', () => {
    const test = (a, b) => a + b;
    const partialed = partialRight<number[], number[], number>(test, 1);
    expect(partialed(2)).toEqual(3);
    expect(partialed(3)).toEqual(4);
  });

  it('partially applies multiple arguments the right', () => {
    const test = (a, b, c, d) => a + b + c + d;
    const partialed = partialRight<number[], number[], number>(test, 2, 3, 4);
    expect(partialed(1)).toEqual(10);
    expect(partialed(2)).toEqual(11);
  });
});
