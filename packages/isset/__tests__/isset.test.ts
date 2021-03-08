import { isSet } from '../src';

describe('@annexe/isset', () => {
  it('returns TRUE when give a set as value', () => {
    expect(isSet(new Set())).toEqual(true);
    expect(isSet(new Set([1, 2, 3]))).toEqual(true);
  });

  it('returns FALSE when give false-like values', () => {
    expect(isSet(false)).toEqual(false);
    expect(isSet(0)).toEqual(false);
    expect(isSet(null)).toEqual(false);
    expect(isSet(void 0)).toEqual(false);
  });

  it('returns FALSE when give object-like as value', () => {
    expect(isSet({})).toEqual(false);
    expect(isSet(new Map())).toEqual(false);
  });

  it('returns FALSE when give an array as value', () => {
    expect(isSet([])).toEqual(false);
    expect(isSet([1, 2, 3])).toEqual(false);
  });
});
