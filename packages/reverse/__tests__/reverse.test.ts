import { reverse } from '../src';

describe('@annexe/reverse', () => {
  it('returns an empty array when given an empty array', () => {
    const myArray = [];
    expect(reverse(myArray)).toEqual([]);
  });

  it('returns a new array in reverse order', () => {
    const myArray = [1, 2, 3, 4, 5];
    expect(reverse(myArray)).toEqual([5, 4, 3, 2, 1]);
  });
});
