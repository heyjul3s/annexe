import { head } from '../src';

describe('@annexe/head', () => {
  it('returns undefined when given an empty array', () => {
    const testArray = [];
    const value = head(testArray);
    expect(value).toEqual(undefined);
  });

  it('returns undefined when given false-like values', () => {
    expect(head('undefined' as any)).toEqual(undefined);
    expect(head(void 0 as any)).toEqual(undefined);
    expect(head(false as any)).toEqual(undefined);
    expect(head(null as any)).toEqual(undefined);
    expect(head(0 as any)).toEqual(undefined);
  });

  it('returns the first value in an array', () => {
    const testArray = [1, 2, 3, 4, 5];
    const value = head<number>(testArray);
    expect(value).toEqual(1);
  });
});
