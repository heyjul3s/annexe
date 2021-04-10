import { isMap } from '../src';

describe('@annexe/ismap', () => {
  it('returns TRUE when give a Map Object as value', () => {
    expect(isMap(new Map())).toEqual(true);
  });

  it('returns FALSE when give a set as value', () => {
    expect(isMap(new Set())).toEqual(false);
    expect(isMap(new Set([1, 2, 3]))).toEqual(false);
  });

  it('returns FALSE when give false-like values', () => {
    expect(isMap(false)).toEqual(false);
    expect(isMap(0)).toEqual(false);
    expect(isMap(null)).toEqual(false);
    expect(isMap(void 0)).toEqual(false);
  });

  it('returns FALSE when give an array as value', () => {
    expect(isMap([])).toEqual(false);
    expect(isMap([1, 2, 3])).toEqual(false);
  });
});
