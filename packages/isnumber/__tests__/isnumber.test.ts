import { isNumber } from '../src';

describe('@annexe/isnumber', () => {
  it('should return FALSE when provided with a false-like, non-numeric type values', () => {
    expect(isNumber(void 0)).toBe(false);
    expect(isNumber(false)).toBe(false);
    expect(isNumber(true)).toBe(false);
    expect(isNumber(NaN)).toBe(false);
  });

  it('should return FALSE for object or object-like values', () => {
    expect(isNumber(null)).toBe(false);
    expect(isNumber(Object.create({}))).toBe(false);
    expect(isNumber({})).toBe(false);
    expect(isNumber([])).toBe(false);
    expect(isNumber(new Map())).toBe(false);
    expect(isNumber(new WeakMap())).toBe(false);
    expect(isNumber(new Set())).toBe(false);
    expect(isNumber(new WeakSet())).toBe(false);
    expect(isNumber(new WeakSet())).toBe(false);
  });

  it('should return FALSE for alphanumeric values casted as number', () => {
    expect(isNumber(Number('Lorem Ipsum Dolor Sit Amet'))).toBe(false);
    expect(isNumber(Number('Hello World 123'))).toBe(false);
  });

  it('should return FALSE for numeric values casted as string', () => {
    expect(isNumber(String(123))).toBe(false);
  });

  it('should return FALSE for string type numeric values', () => {
    expect(isNumber('')).toBe(false);
    expect(isNumber(' ')).toBe(false);
    expect(isNumber('0')).toBe(false);
    expect(isNumber('-0')).toBe(false);
    expect(isNumber('+0')).toBe(false);
    expect(isNumber('1')).toBe(false);
  });

  it('should return TRUE for numeric type values including floats', () => {
    expect(isNumber(123)).toBe(true);
    expect(isNumber(3.142)).toBe(true);
  });

  it('should return TRUE for a numeric string casted as number type', () => {
    expect(isNumber(Number('123456'))).toBe(true);
    expect(isNumber(Number('3.142'))).toBe(true);
    expect(isNumber(Number('+123456'))).toBe(true);
    expect(isNumber(Number('-123456'))).toBe(true);
  });

  it('should return TRUE for number type with value of ZERO', () => {
    expect(isNumber(0)).toBe(true);
  });

  it('should return TRUE for negative numeric type values', () => {
    expect(isNumber(-9999)).toBe(true);
    expect(isNumber(-0)).toBe(true);
  });

  it('should return TRUE for negative numeric type values', () => {
    expect(isNumber(+9999)).toBe(true);
    expect(isNumber(+0)).toBe(true);
  });
});
