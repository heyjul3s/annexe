import { tail } from '../src';

describe('@annexe/tail', () => {
  it('returns an empty array when given an empty array', () => {
    const testArray = [];
    expect(tail(testArray)).toEqual([]);
  });

  it('returns the rest of the array apart from the first value', () => {
    const testArray = [1, 2, 3, 4, 5];
    expect(tail<number>(testArray)).toEqual([2, 3, 4, 5]);
  });

  it('slices the array when provided an index', () => {
    const myArray = [1, 2, 3, 4, 5];
    expect(tail(myArray, 2)).toEqual([3, 4, 5]);
  });
});
