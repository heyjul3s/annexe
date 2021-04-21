import { isWeakSet } from '../src';

describe('@annexe/isweakset', () => {
  it('returns TRUE when give a Weak Set as value', () => {
    expect(isWeakSet(new WeakSet())).toEqual(true);
  });

  it('returns FALSE when give false-like values', () => {
    expect(isWeakSet(false)).toEqual(false);
    expect(isWeakSet(0)).toEqual(false);
    expect(isWeakSet(null)).toEqual(false);
    expect(isWeakSet(void 0)).toEqual(false);
  });

  it('returns FALSE when give object-like as value', () => {
    expect(isWeakSet({})).toEqual(false);
    expect(isWeakSet(new Map())).toEqual(false);
  });

  it('returns FALSE when give an array as value', () => {
    expect(isWeakSet([])).toEqual(false);
    expect(isWeakSet([1, 2, 3])).toEqual(false);
  });
});
