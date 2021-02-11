import { isNegative } from '../src';

describe('@annexe/isnegative', () => {
  it('returns TRUE when given a negative numeric value', () => {
    expect(isNegative(-1)).toEqual(true);
    expect(isNegative('-1')).toEqual(true);
    expect(isNegative(-3.142)).toEqual(true);
    expect(isNegative('-3.142')).toEqual(true);
    expect(isNegative(-Infinity)).toEqual(true);
  });

  it('returns FALSE when given values of 0 or higher', () => {
    expect(isNegative(-0)).toEqual(false);
    expect(isNegative(0)).toEqual(false);
    expect(isNegative(+0)).toEqual(false);
    expect(isNegative(0.0000001)).toEqual(false);
    expect(isNegative(1)).toEqual(false);
    expect(isNegative(Infinity)).toEqual(false);
    expect(isNegative(BigInt('9007199254740991'))).toEqual(false);
  });
});
