import { isArray } from '../src';

describe('@annexe/isarray', () => {
  it('returns TRUE when given an array', () => {
    expect(isArray([])).toEqual(true);
    expect(isArray([1, 2, 3, 4, 5])).toEqual(true);
    expect(isArray(['1', 2, void 0, {}, []])).toEqual(true);
  });
});
