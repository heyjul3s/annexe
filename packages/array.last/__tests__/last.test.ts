import { last } from '../src';

describe('@annexe/last', () => {
  it('returns the last value in the array', () => {
    const myArray = [1, [2], 3, 4, { id: '1' }];
    expect(last(myArray)).toEqual({ id: '1' });
  });

  it('returns an empty array when given an empty array', () => {
    const myArray = [];
    expect(last(myArray)).toEqual(void 0);
  });

  it('returns undefined when given false-like values', () => {
    expect(last('undefined' as any)).toEqual(undefined);
    expect(last(void 0 as any)).toEqual(undefined);
    expect(last(false as any)).toEqual(undefined);
    expect(last(null as any)).toEqual(undefined);
    expect(last(0 as any)).toEqual(undefined);
  });

  it('returns the last value in the array', () => {
    const myArray = [1, '2', 3, 4, false];
    const lastValue = last<number | boolean | string>(myArray);
    expect(lastValue).toEqual(false);
  });
});
