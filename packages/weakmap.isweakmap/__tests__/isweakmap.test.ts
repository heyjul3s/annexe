import { isWeakMap } from '../src';

describe('@annexe/isweakmap', () => {
  it('returns TRUE when give a Weak Map as value', () => {
    expect(isWeakMap(new WeakMap())).toEqual(true);
  });

  it('returns FALSE when give false-like values', () => {
    expect(isWeakMap(false)).toEqual(false);
    expect(isWeakMap(0)).toEqual(false);
    expect(isWeakMap(null)).toEqual(false);
    expect(isWeakMap(void 0)).toEqual(false);
  });

  it('returns FALSE when give object-like as value', () => {
    expect(isWeakMap({})).toEqual(false);
    expect(isWeakMap(new Map())).toEqual(false);
  });

  it('returns FALSE when give an array as value', () => {
    expect(isWeakMap([])).toEqual(false);
    expect(isWeakMap([1, 2, 3])).toEqual(false);
  });
});
