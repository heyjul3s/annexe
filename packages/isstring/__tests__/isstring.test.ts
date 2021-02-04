import { isString } from '../src';

describe('@annexe/isstring', () => {
  it('should return FALSE when provided with false-like values', () => {
    expect(isString(void 0)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(false)).toBe(false);
    expect(isString(NaN)).toBe(false);
  });

  it('should return FALSE for object or object-like values', () => {
    expect(isString(null)).toBe(false);
    expect(isString(Object.create({}))).toBe(false);
    expect(isString({})).toBe(false);
    expect(isString([])).toBe(false);
    expect(isString(new Map())).toBe(false);
    expect(isString(new WeakMap())).toBe(false);
    expect(isString(new Set())).toBe(false);
    expect(isString(new WeakSet())).toBe(false);
    expect(isString(new WeakSet())).toBe(false);
  });

  it('should return TRUE for string type values', () => {
    expect(isString('1')).toBe(true);
    expect(isString('Hello Wolrd')).toBe(true);
  });

  it('should return TRUE with numeric value casted as string', () => {
    expect(isString(String(3.142))).toBe(true);
    expect(isString(String(123))).toBe(true);
    expect(isString(String(-123))).toBe(true);
    expect(isString(String(+123))).toBe(true);
  });

  it('should return TRUE for empty space string values', () => {
    expect(isString(' ')).toBe(true);
    expect(isString('    ')).toBe(true);
  });

  it('should return TRUE for empty string values', () => {
    expect(isString('')).toBe(true);
  });
});
