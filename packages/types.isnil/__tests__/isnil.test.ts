import { isNil } from '../src';

describe('@annexe/isnil', () => {
  it('returns TRUE when provided value is NULL', () => {
    expect(isNil(null)).toEqual(true);
  });

  it('returns TRUE when provided value is UNDEFINED', () => {
    expect(isNil(void 0)).toEqual(true);
  });

  it('returns FALSE when provided false-like values', () => {
    expect(isNil(0)).toEqual(false);
    expect(isNil(false)).toEqual(false);
    expect(isNil('')).toEqual(false);
  });

  it('returns FALSE when provided defined values', () => {
    expect(isNil(new Map())).toEqual(false);
    expect(isNil(new WeakMap())).toEqual(false);
    expect(isNil(new Set())).toEqual(false);
    expect(isNil(new WeakSet())).toEqual(false);
    expect(isNil(Symbol('Hello'))).toEqual(false);
    expect(isNil({})).toEqual(false);
    expect(isNil([])).toEqual(false);
    expect(isNil('Lorem Ipsum Dolor Sit Amet')).toEqual(false);
    expect(isNil(' ')).toEqual(false);
    expect(isNil(1)).toEqual(false);
    expect(isNil(-1)).toEqual(false);
    expect(isNil(+1)).toEqual(false);
  });
});
