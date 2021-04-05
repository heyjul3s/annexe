import { isFloat } from '../src';

describe('@annexe/isfloat', () => {
  it('returns FALSE for integers', () => {
    expect(isFloat(0)).toBe(false);
    expect(isFloat(-0)).toBe(false);
    expect(isFloat(+0)).toBe(false);
  });

  it('returns FALSE for non-numeric values', () => {
    expect(isFloat('Lorem Ipsum Dolor Sit Amet')).toBe(false);
    expect(isFloat('0')).toBe(false);
    expect(isFloat('-0')).toBe(false);
    expect(isFloat('+0')).toBe(false);
  });

  it('returns TRUE for numeric values with decimal places', () => {
    expect(isFloat(3.142)).toBe(true);
    expect(isFloat(-3.142)).toBe(true);
  });

  it('returns TRUE for string numeric values with decimal places casted as number', () => {
    expect(isFloat(Number('3.142'))).toBe(true);
    expect(isFloat(Number('-3.142'))).toBe(true);
  });
});
