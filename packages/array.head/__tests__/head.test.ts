import { head } from '../src';

describe('@annexe/head', () => {
  it('returns an empty array when given an empty array', () => {
    const myArray = [];
    expect(head(myArray)).toEqual([]);
  });

  it('returns the first element as an array', () => {
    const myArray = [1, 2, 3, 4, 5];
    expect(head(myArray)).toEqual([1]);
  });

  it('slices the array when provided an index', () => {
    const myArray = [1, 2, 3, 4, 5];
    expect(head(myArray, 2)).toEqual([1, 2]);
  });
});
