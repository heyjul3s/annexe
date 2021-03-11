import { first } from '../src';

describe('@annexe/first', () => {
  it('returns undefined when given an empty array', () => {
    const testArray = [];
    const value = first(testArray);
    expect(value).toEqual(undefined);
  });

  it('returns undefined when given false-like values', () => {
    expect(first('undefined' as any)).toEqual(undefined);
    expect(first(void 0 as any)).toEqual(undefined);
    expect(first(false as any)).toEqual(undefined);
    expect(first(null as any)).toEqual(undefined);
    expect(first(0 as any)).toEqual(undefined);
  });

  it('returns the first value in an array', () => {
    const testArray = [1, 2, 3, 4, 5];
    const value = first<number>(testArray);
    expect(value).toEqual(1);
  });
});
