import { head } from '../src';

describe('@annexe/head', () => {
  it('returns undefined when given an empty array', () => {
    const testArray = [];
    expect(head<number[]>(testArray)).toEqual(undefined);
  });

  it('returns the first value in an array', () => {
    const testArray = [1, 2, 3, 4, 5];
    expect(head<number>(testArray)).toEqual(1);
  });
});
